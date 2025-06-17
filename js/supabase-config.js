/*
* Supabase Configuration for euroaxislogistics
* Handles database connections and form submissions
*/

// Supabase Configuration
const SUPABASE_URL = 'https://wgsgwhpufveqfqffkcyw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnc2d3aHB1ZnZlcWZxZmZrY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MDQ3NzUsImV4cCI6MjA2MzQ4MDc3NX0.mJ9DHOmxaPQzHMAPpr_cwktwqABEKXHNIs16C-vjZKo';

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Contact Form Submission
async function submitContactForm(formData) {
    try {
        const { data, error } = await supabaseClient
            .from('contacts')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    ip_address: await getUserIP(),
                    user_agent: navigator.userAgent
                }
            ]);

        if (error) {
            console.error('Error submitting contact form:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Network error:', err);
        return { success: false, error: 'Network error occurred' };
    }
}

// Job Application Submission
async function submitJobApplication(formData) {
    try {
        const { data, error } = await supabaseClient
            .from('job_applications')
            .insert([
                {
                    full_name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    job_title: formData.jobTitle,
                    job_location: formData.jobLocation,
                    cover_letter: formData.coverLetter,
                    resume_url: null, // Will be updated after file upload
                    ip_address: await getUserIP(),
                    user_agent: navigator.userAgent
                }
            ])
            .select();

        if (error) {
            console.error('Error submitting job application:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Network error:', err);
        return { success: false, error: 'Network error occurred' };
    }
}

// Get User IP Address (for tracking purposes)
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error getting IP:', error);
        return null;
    }
}

// File Upload to Supabase Storage
async function uploadResume(file, applicationId) {
    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${applicationId}-${Date.now()}.${fileExt}`;
        const filePath = `resumes/${fileName}`;

        const { data, error } = await supabaseClient.storage
            .from('job-applications')
            .upload(filePath, file);

        if (error) {
            console.error('Error uploading file:', error);
            return { success: false, error: error.message };
        }

        // Get public URL
        const { data: urlData } = supabaseClient.storage
            .from('job-applications')
            .getPublicUrl(filePath);

        return { success: true, url: urlData.publicUrl };
    } catch (err) {
        console.error('File upload error:', err);
        return { success: false, error: 'File upload failed' };
    }
}

// Update job application with resume URL
async function updateJobApplicationWithResume(applicationId, resumeUrl) {
    try {
        const { data, error } = await supabaseClient
            .from('job_applications')
            .update({ resume_url: resumeUrl })
            .eq('id', applicationId);

        if (error) {
            console.error('Error updating application:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Update error:', err);
        return { success: false, error: 'Update failed' };
    }
}

// Form Validation Helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Custom Popup Functions
function showCustomPopup(type, title, message, buttons = null) {
    // Remove existing popup if any
    const existingPopup = document.getElementById('customPopup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create popup HTML
    const popup = document.createElement('div');
    popup.id = 'customPopup';
    popup.className = 'custom-popup';

    let iconClass = '';
    let iconContent = '';

    switch(type) {
        case 'success':
            iconClass = 'success';
            iconContent = '<i class="fas fa-check"></i>';
            break;
        case 'error':
            iconClass = 'error';
            iconContent = '<i class="fas fa-times"></i>';
            break;
        case 'loading':
            iconClass = 'loading';
            iconContent = '<div class="loading-spinner"></div>';
            break;
        default:
            iconClass = 'success';
            iconContent = '<i class="fas fa-info"></i>';
    }

    let buttonsHTML = '';
    if (buttons && buttons.length > 0) {
        buttonsHTML = '<div class="popup-buttons">';
        buttons.forEach(button => {
            buttonsHTML += `<button class="popup-btn ${button.class}" onclick="${button.action}">${button.text}</button>`;
        });
        buttonsHTML += '</div>';
    } else {
        buttonsHTML = '<div class="popup-buttons"><button class="popup-btn primary" onclick="closeCustomPopup()">OK</button></div>';
    }

    popup.innerHTML = `
        <div class="popup-content">
            <button class="popup-close" onclick="closeCustomPopup()">&times;</button>
            <div class="popup-icon ${iconClass}">
                ${iconContent}
            </div>
            <h3 class="popup-title">${title}</h3>
            <p class="popup-message">${message}</p>
            ${type !== 'loading' ? buttonsHTML : ''}
        </div>
    `;

    document.body.appendChild(popup);

    // Show popup with animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    // Auto close for success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            closeCustomPopup();
        }, 3000);
    }

    return popup;
}

function closeCustomPopup() {
    const popup = document.getElementById('customPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}

function showLoadingPopup(title = 'Processing...', message = 'Please wait while we process your request.') {
    return showCustomPopup('loading', title, message);
}

function showSuccessPopup(title, message) {
    return showCustomPopup('success', title, message);
}

function showErrorPopup(title, message) {
    return showCustomPopup('error', title, message);
}

// Export functions for use in other files
window.SupabaseAPI = {
    submitContactForm,
    submitJobApplication,
    uploadResume,
    updateJobApplicationWithResume,
    validateEmail,
    validatePhone
};

// Export popup functions
window.CustomPopup = {
    show: showCustomPopup,
    close: closeCustomPopup,
    loading: showLoadingPopup,
    success: showSuccessPopup,
    error: showErrorPopup
};
