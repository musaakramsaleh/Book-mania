
const Privacy = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='py-[33px] mt-9 bg-[#1313130D] mx-auto'>
                 <h2 className="text-center text-5xl font-bold">privacy Policies</h2>
            </div>
            <div>
                <h2 className="text-center text-black mt-5 mb-5 font-bold text-3xl">we are committed to protecting your privacy</h2>
                <h2 className="text-black mt-5 mb-5 font-bold text-2xl md:text-left text-center">Information We Collect:</h2>
                <ul className="md:mx-0 mx-3">
                    <li>Personal Information: When you register an account or make a purchase, we may collect your name, email address, postal address, and payment details.</li>
                    <li>Usage Information: We automatically collect information about your interactions with our website, including your IP address, browser type, pages visited, and referring URLs.</li>
                    <li>Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</li>
                </ul>
                <h2 className="text-black mt-5 mb-5 font-bold text-2xl md:text-left text-center">How We Use Your Information:</h2>
                <ul className="md:mx-0 mx-3">
                    <li>Personalization: We use your information to personalize your experience on our website, such as providing tailored recommendations and content.</li>
                    <li>Communication: We may use your contact information to send you updates, newsletters, promotional offers, and other communications.</li>
                    <li>CTransactions: We use your payment information to process transactions and fulfill orders.</li>
                </ul>
                <h2 className="text-black mt-5 mb-5 font-bold text-2xl md:text-left text-center">Data Sharing:</h2>
                <ul className="md:mx-0 mx-3">
                    <li>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</li>
                    <li>We may share your information with trusted service providers who assist us in operating our website and providing services to you.</li>
                </ul>
            </div>
        </div>
    );
};

export default Privacy;