/*
* euroaxislogistics - Services JavaScript
* Functionality for the services page
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Service Modal Functionality
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('serviceModalContent');
    const closeModal = document.querySelector('.close-modal');

    // Close modal when clicking the X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Service data for modal content
    const serviceData = {
        'inventory-management': {
            title: 'Inventory Management Services',
            icon: 'fas fa-clipboard-list',
            content: `
                <p>Our advanced inventory management services provide real-time visibility and control over your stock levels and movements. We use cutting-edge technology and proven methodologies to optimize your inventory, reduce costs, and improve operational efficiency.</p>
                <p>Our team of inventory management experts works closely with you to understand your specific requirements and develop customized solutions that address your challenges. Whether you need basic inventory tracking or complex multi-location inventory optimization, we have the expertise and tools to support your success.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Real-time inventory tracking and visibility</li>
                        <li><i class="fas fa-check-circle"></i> Barcode and RFID technology implementation</li>
                        <li><i class="fas fa-check-circle"></i> Inventory optimization and demand forecasting</li>
                        <li><i class="fas fa-check-circle"></i> Cycle counting and physical inventory support</li>
                        <li><i class="fas fa-check-circle"></i> Multi-location inventory management</li>
                        <li><i class="fas fa-check-circle"></i> Inventory reporting and analytics</li>
                        <li><i class="fas fa-check-circle"></i> Integration with ERP and WMS systems</li>
                        <li><i class="fas fa-check-circle"></i> Inventory control procedures and best practices</li>
                    </ul>
                </div>
                <p>Our inventory management services help you maintain optimal stock levels, reduce carrying costs, and ensure product availability to meet customer demands.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'order-fulfillment': {
            title: 'Order Fulfillment Services',
            icon: 'fas fa-box-open',
            content: `
                <p>Our comprehensive order fulfillment services handle the entire process from receiving orders to picking, packing, and shipping to your customers. We provide efficient, accurate, and timely fulfillment solutions that enhance customer satisfaction and streamline your operations.</p>
                <p>With our state-of-the-art fulfillment centers, experienced staff, and advanced technology, we ensure that your orders are processed quickly and accurately. Our flexible solutions can be tailored to meet the specific needs of your business, whether you're an e-commerce retailer, a B2B distributor, or a multi-channel seller.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Fast and accurate order processing</li>
                        <li><i class="fas fa-check-circle"></i> Efficient picking and packing operations</li>
                        <li><i class="fas fa-check-circle"></i> Multiple shipping options and carrier integration</li>
                        <li><i class="fas fa-check-circle"></i> Custom packaging and branding solutions</li>
                        <li><i class="fas fa-check-circle"></i> Returns management and processing</li>
                        <li><i class="fas fa-check-circle"></i> Real-time order tracking and status updates</li>
                        <li><i class="fas fa-check-circle"></i> Integration with e-commerce platforms and marketplaces</li>
                        <li><i class="fas fa-check-circle"></i> Scalable solutions to handle volume fluctuations</li>
                    </ul>
                </div>
                <p>Our order fulfillment services help you deliver a superior customer experience while reducing operational costs and focusing on growing your business.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'technology-solutions': {
            title: 'Supply Chain Technology Solutions',
            icon: 'fas fa-laptop-code',
            content: `
                <p>Our cutting-edge technology solutions provide visibility, control, and optimization across your entire supply chain. We leverage the latest innovations in logistics technology to help you streamline operations, reduce costs, and enhance customer satisfaction.</p>
                <p>Our team of technology experts works closely with you to understand your specific requirements and implement solutions that address your challenges. From track and trace systems to supply chain visibility platforms and data analytics, we provide the tools you need to succeed in today's competitive marketplace.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> End-to-end supply chain visibility</li>
                        <li><i class="fas fa-check-circle"></i> Real-time tracking and monitoring</li>
                        <li><i class="fas fa-check-circle"></i> Advanced analytics and reporting</li>
                        <li><i class="fas fa-check-circle"></i> Integration with existing systems and platforms</li>
                        <li><i class="fas fa-check-circle"></i> Mobile applications for on-the-go management</li>
                        <li><i class="fas fa-check-circle"></i> IoT and sensor-based solutions</li>
                        <li><i class="fas fa-check-circle"></i> Predictive analytics and machine learning</li>
                        <li><i class="fas fa-check-circle"></i> Customized dashboards and reporting tools</li>
                    </ul>
                </div>
                <p>Our technology solutions help you gain better visibility and control over your supply chain, enabling data-driven decision making and continuous improvement.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'road-freight': {
            title: 'Road Freight Services',
            icon: 'fas fa-truck-moving',
            content: `
                <p>Our comprehensive road freight services connect businesses across Europe with reliability and efficiency. With a modern fleet of vehicles and experienced drivers, we offer tailored solutions for shipments of all sizes, from small parcels to full truckloads.</p>
                <p>euroaxislogistics' strategic location in the Netherlands allows us to provide optimal coverage throughout Europe, with direct routes to major cities and efficient connections to remote locations. Our advanced tracking systems ensure you always know where your cargo is, while our commitment to sustainability means we're constantly working to reduce our environmental impact.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Extensive network covering all European countries</li>
                        <li><i class="fas fa-check-circle"></i> Flexible solutions for shipments of all sizes</li>
                        <li><i class="fas fa-check-circle"></i> Real-time tracking and status updates</li>
                        <li><i class="fas fa-check-circle"></i> Express delivery options for time-critical shipments</li>
                        <li><i class="fas fa-check-circle"></i> Specialized vehicles for temperature-controlled and hazardous goods</li>
                        <li><i class="fas fa-check-circle"></i> Eco-friendly fleet with modern, low-emission vehicles</li>
                        <li><i class="fas fa-check-circle"></i> Experienced drivers trained in safety and customer service</li>
                        <li><i class="fas fa-check-circle"></i> Comprehensive insurance coverage for all shipments</li>
                    </ul>
                </div>
                <p>Whether you need regular scheduled deliveries, one-time shipments, or a customized distribution solution, our road freight services provide the reliability, flexibility, and efficiency your business demands.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'sea-freight': {
            title: 'Sea Freight Services',
            icon: 'fas fa-ship',
            content: `
                <p>euroaxislogistics offers comprehensive sea freight solutions connecting the Netherlands with ports worldwide. Our strategic partnerships with major shipping lines enable us to provide competitive rates and reliable service for all your maritime shipping needs.</p>
                <p>We handle both FCL (Full Container Load) and LCL (Less than Container Load) shipments, as well as specialized cargo such as oversized equipment, hazardous materials, and temperature-sensitive goods. Our experienced team manages all aspects of your sea freight shipments, from documentation and customs clearance to inland transportation and final delivery.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Competitive rates through established carrier relationships</li>
                        <li><i class="fas fa-check-circle"></i> Regular sailings from major Dutch ports</li>
                        <li><i class="fas fa-check-circle"></i> Flexible FCL and LCL options to suit your needs</li>
                        <li><i class="fas fa-check-circle"></i> Specialized handling for project cargo and oversized shipments</li>
                        <li><i class="fas fa-check-circle"></i> Comprehensive documentation and customs support</li>
                        <li><i class="fas fa-check-circle"></i> End-to-end visibility with advanced tracking systems</li>
                        <li><i class="fas fa-check-circle"></i> Multimodal solutions combining sea with road or air transport</li>
                        <li><i class="fas fa-check-circle"></i> Sustainable shipping options with reduced environmental impact</li>
                    </ul>
                </div>
                <p>Our sea freight services are designed to provide reliable, cost-effective solutions for your international shipping requirements, whether you're moving standard containers or complex project cargo.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'air-freight': {
            title: 'Air Freight Services',
            icon: 'fas fa-plane',
            content: `
                <p>When time is critical, our air freight solutions provide the speed and reliability your business needs. Operating through Amsterdam Schiphol Airport, one of Europe's major cargo hubs, we offer efficient air freight services to destinations worldwide.</p>
                <p>Our team works with leading airlines to secure optimal routes and competitive rates for your shipments. We handle everything from documentation and customs clearance to special handling requirements, ensuring your cargo arrives safely and on schedule.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Express delivery for time-sensitive shipments</li>
                        <li><i class="fas fa-check-circle"></i> Global coverage through extensive airline partnerships</li>
                        <li><i class="fas fa-check-circle"></i> Consolidated shipments for cost efficiency</li>
                        <li><i class="fas fa-check-circle"></i> Charter services for oversized or urgent cargo</li>
                        <li><i class="fas fa-check-circle"></i> Specialized handling for high-value and sensitive items</li>
                        <li><i class="fas fa-check-circle"></i> Dangerous goods handling by certified specialists</li>
                        <li><i class="fas fa-check-circle"></i> Temperature-controlled solutions for perishable goods</li>
                        <li><i class="fas fa-check-circle"></i> Door-to-door service with integrated ground transportation</li>
                    </ul>
                </div>
                <p>Whether you need to ship urgent documents, perishable goods, high-value items, or oversized equipment, our air freight services provide the perfect balance of speed, security, and reliability.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'warehousing': {
            title: 'Warehousing Services',
            icon: 'fas fa-warehouse',
            content: `
                <p>Our state-of-the-art warehousing facilities across Europe offer secure storage and efficient inventory management for businesses of all sizes. With strategic locations in the Netherlands and other key European markets, we provide the perfect solution for your storage and distribution needs.</p>
                <p>Our warehouses feature advanced security systems, climate control options, and modern handling equipment to ensure your products are stored safely and managed efficiently. Our experienced team uses the latest warehouse management systems to optimize inventory control, order fulfillment, and distribution processes.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Strategic locations with excellent transport connections</li>
                        <li><i class="fas fa-check-circle"></i> Flexible short and long-term storage options</li>
                        <li><i class="fas fa-check-circle"></i> Temperature-controlled facilities for sensitive products</li>
                        <li><i class="fas fa-check-circle"></i> Advanced inventory management systems</li>
                        <li><i class="fas fa-check-circle"></i> Order picking, packing, and fulfillment services</li>
                        <li><i class="fas fa-check-circle"></i> Cross-docking capabilities for efficient distribution</li>
                        <li><i class="fas fa-check-circle"></i> Value-added services such as labeling, kitting, and assembly</li>
                        <li><i class="fas fa-check-circle"></i> Real-time inventory visibility and reporting</li>
                    </ul>
                </div>
                <p>Whether you need storage for raw materials, finished goods, or e-commerce fulfillment, our warehousing services provide the flexibility, efficiency, and reliability your supply chain demands.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'supply-chain': {
            title: 'Supply Chain Management',
            icon: 'fas fa-boxes',
            content: `
                <p>Optimize your entire supply chain with our integrated management solutions. We analyze your current operations, identify improvement opportunities, and implement strategies to enhance efficiency and reduce costs across your logistics network.</p>
                <p>Our supply chain experts work closely with your team to develop customized solutions that address your specific challenges and objectives. From network design and demand planning to inventory optimization and performance analytics, we provide the expertise and tools to transform your supply chain into a competitive advantage.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Comprehensive supply chain assessment and optimization</li>
                        <li><i class="fas fa-check-circle"></i> Network design and transportation planning</li>
                        <li><i class="fas fa-check-circle"></i> Demand forecasting and inventory management</li>
                        <li><i class="fas fa-check-circle"></i> Supplier management and procurement support</li>
                        <li><i class="fas fa-check-circle"></i> Risk management and contingency planning</li>
                        <li><i class="fas fa-check-circle"></i> Technology integration and systems optimization</li>
                        <li><i class="fas fa-check-circle"></i> Performance measurement and continuous improvement</li>
                        <li><i class="fas fa-check-circle"></i> Sustainability initiatives and carbon footprint reduction</li>
                    </ul>
                </div>
                <p>Our supply chain management services help you achieve greater visibility, control, and efficiency throughout your logistics operations, enabling you to respond quickly to market changes and customer demands.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'customs-clearance': {
            title: 'Customs Clearance Services',
            icon: 'fas fa-file-contract',
            content: `
                <p>Navigate complex customs regulations with ease through our expert customs clearance services. Our knowledgeable team ensures compliance with all requirements, minimizing delays and avoiding penalties for your international shipments.</p>
                <p>With extensive experience in European customs procedures and international trade regulations, we handle all aspects of the customs clearance process, from documentation preparation and classification to duty calculation and payment. Our customs specialists stay up-to-date with the latest regulations to ensure smooth border crossings for your cargo.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Expert handling of import and export declarations</li>
                        <li><i class="fas fa-check-circle"></i> Accurate classification and valuation of goods</li>
                        <li><i class="fas fa-check-circle"></i> Duty and tax calculation and management</li>
                        <li><i class="fas fa-check-circle"></i> Special customs regimes and procedures</li>
                        <li><i class="fas fa-check-circle"></i> Compliance with trade regulations and restrictions</li>
                        <li><i class="fas fa-check-circle"></i> Electronic customs filing for faster clearance</li>
                        <li><i class="fas fa-check-circle"></i> Customs consulting and advisory services</li>
                        <li><i class="fas fa-check-circle"></i> Post-clearance documentation and record keeping</li>
                    </ul>
                </div>
                <p>Our customs clearance services ensure your international shipments move smoothly across borders, with minimal delays and complete compliance with all regulatory requirements.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Quote</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        }
    };

    // Industry solutions data
    const industryData = {
        'ecommerce': {
            title: 'E-commerce Logistics Solutions',
            icon: 'fas fa-shopping-cart',
            content: `
                <p>Our specialized e-commerce logistics solutions are designed to help online retailers optimize their supply chain, enhance customer satisfaction, and scale their operations efficiently. From warehousing and order fulfillment to last-mile delivery and returns management, we provide end-to-end support for your e-commerce business.</p>
                <p>With strategically located fulfillment centers across Europe, advanced inventory management systems, and flexible delivery options, we help you meet the expectations of today's demanding online shoppers while controlling costs and improving operational efficiency.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Strategically located fulfillment centers for fast delivery</li>
                        <li><i class="fas fa-check-circle"></i> Efficient order processing and same-day shipping</li>
                        <li><i class="fas fa-check-circle"></i> Multiple delivery options including express and economy</li>
                        <li><i class="fas fa-check-circle"></i> Seamless integration with major e-commerce platforms</li>
                        <li><i class="fas fa-check-circle"></i> Streamlined returns management process</li>
                        <li><i class="fas fa-check-circle"></i> Real-time inventory visibility and stock management</li>
                        <li><i class="fas fa-check-circle"></i> Customized packaging and branding options</li>
                        <li><i class="fas fa-check-circle"></i> Scalable solutions to support business growth</li>
                    </ul>
                </div>
                <p>Our e-commerce logistics solutions help you deliver an exceptional customer experience while optimizing your operations for efficiency and growth.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'pharmaceutical': {
            title: 'Pharmaceutical Transport Solutions',
            icon: 'fas fa-prescription-bottle-alt',
            content: `
                <p>Our pharmaceutical transport solutions ensure the integrity and safety of your sensitive medical products throughout the supply chain. With temperature-controlled vehicles, specialized handling procedures, and strict quality controls, we meet the highest standards for pharmaceutical logistics.</p>
                <p>Our team is trained in GDP (Good Distribution Practice) guidelines and understands the critical requirements for transporting pharmaceuticals, including temperature monitoring, security protocols, and regulatory compliance. We provide complete documentation and validation to support your quality assurance processes.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> GDP-compliant transportation and storage</li>
                        <li><i class="fas fa-check-circle"></i> Temperature-controlled vehicles and warehouses</li>
                        <li><i class="fas fa-check-circle"></i> Continuous temperature monitoring and recording</li>
                        <li><i class="fas fa-check-circle"></i> Validated packaging solutions for different temperature ranges</li>
                        <li><i class="fas fa-check-circle"></i> Enhanced security measures for high-value products</li>
                        <li><i class="fas fa-check-circle"></i> Comprehensive documentation and traceability</li>
                        <li><i class="fas fa-check-circle"></i> Regulatory compliance and quality assurance</li>
                        <li><i class="fas fa-check-circle"></i> Specialized handling for clinical trials and sensitive products</li>
                    </ul>
                </div>
                <p>Our pharmaceutical transport solutions provide the reliability, security, and quality assurance required for your valuable and sensitive medical products.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'retail': {
            title: 'Retail Distribution Solutions',
            icon: 'fas fa-store',
            content: `
                <p>Our retail distribution solutions help retailers optimize their supply chain, ensure product availability, and enhance customer satisfaction. From warehouse management and inventory control to store replenishment and seasonal logistics planning, we provide comprehensive support for your retail operations.</p>
                <p>With our extensive distribution network, flexible delivery options, and advanced inventory management systems, we help you meet consumer demands while controlling costs and improving operational efficiency. Our team understands the unique challenges of retail logistics, including seasonal peaks, promotions, and omnichannel fulfillment.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Efficient store replenishment and distribution</li>
                        <li><i class="fas fa-check-circle"></i> Inventory management and stock optimization</li>
                        <li><i class="fas fa-check-circle"></i> Cross-docking for faster product flow</li>
                        <li><i class="fas fa-check-circle"></i> Seasonal and promotional logistics planning</li>
                        <li><i class="fas fa-check-circle"></i> Omnichannel fulfillment capabilities</li>
                        <li><i class="fas fa-check-circle"></i> Value-added services such as price tagging and display building</li>
                        <li><i class="fas fa-check-circle"></i> Returns management and reverse logistics</li>
                        <li><i class="fas fa-check-circle"></i> Analytics and reporting for supply chain optimization</li>
                    </ul>
                </div>
                <p>Our retail distribution solutions help you maintain optimal inventory levels, reduce stockouts, and deliver an exceptional shopping experience for your customers.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        },
        'automotive': {
            title: 'Automotive Logistics Solutions',
            icon: 'fas fa-car',
            content: `
                <p>Our automotive logistics solutions are designed to meet the unique requirements of the automotive industry, from just-in-time delivery systems to efficient supply chain management. We understand the critical nature of automotive production and provide reliable, precise logistics services to support your manufacturing operations.</p>
                <p>With our expertise in automotive logistics, we help manufacturers and suppliers optimize their supply chains, reduce inventory costs, and ensure production continuity. Our team works closely with you to develop customized solutions that address your specific challenges and objectives.</p>
                <div class="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Just-in-time and just-in-sequence delivery systems</li>
                        <li><i class="fas fa-check-circle"></i> Production line supply and sequencing</li>
                        <li><i class="fas fa-check-circle"></i> Parts distribution and aftermarket logistics</li>
                        <li><i class="fas fa-check-circle"></i> Inbound logistics management</li>
                        <li><i class="fas fa-check-circle"></i> Cross-docking and milk-run operations</li>
                        <li><i class="fas fa-check-circle"></i> Quality control and inspection services</li>
                        <li><i class="fas fa-check-circle"></i> Specialized handling for automotive components</li>
                        <li><i class="fas fa-check-circle"></i> Supply chain visibility and performance analytics</li>
                    </ul>
                </div>
                <p>Our automotive logistics solutions help you maintain efficient production operations, reduce costs, and respond quickly to changing market demands and production schedules.</p>
                <div class="service-cta">
                    <a href="contact.html" class="btn btn-primary">Request a Consultation</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Our Team</a>
                </div>
            `
        }
    };

    // Function to show service details in modal
    window.showServiceDetails = function(serviceId) {
        if (serviceData[serviceId]) {
            const service = serviceData[serviceId];

            // Create modal content
            const content = `
                <div class="service-modal-header">
                    <div class="service-modal-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <div class="service-modal-title">
                        <h2>${service.title}</h2>
                    </div>
                </div>
                <div class="service-modal-content">
                    ${service.content}
                </div>
            `;

            // Set modal content
            modalContent.innerHTML = content;

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    };

    // Function to show industry details in modal
    window.showIndustryDetails = function(industryId) {
        if (industryData[industryId]) {
            const industry = industryData[industryId];

            // Create modal content
            const content = `
                <div class="service-modal-header">
                    <div class="service-modal-icon">
                        <i class="${industry.icon}"></i>
                    </div>
                    <div class="service-modal-title">
                        <h2>${industry.title}</h2>
                    </div>
                </div>
                <div class="service-modal-content">
                    ${industry.content}
                </div>
            `;

            // Set modal content
            modalContent.innerHTML = content;

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    };
});
