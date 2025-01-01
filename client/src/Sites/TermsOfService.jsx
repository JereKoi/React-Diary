import React, { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./TermsOfService.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const TermsOfService = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="terms-container">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="terms-header">
            <h1>Terms of Service for Diary</h1>
            <h3>Last updated: [Date]</h3>
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla magna ut sem sollicitudin, nec ullamcorper turpis
            vulputate. By using our service, you agree to these Terms of
            Service. If you disagree with any part, please refrain from using
            our app.</p>
            <h3>2. Account Registration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Ut aliquet
            lorem ac ligula interdum, in tincidunt dolor tincidunt. You agree to
            provide accurate information during registration and keep your
            account details secure.</p>
            <h3>3. User Responsibilities</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. You
            agree not to misuse the app for unlawful or harmful activities,
            including but not limited to: Lorem ipsum dolor sit: Amet,
            consectetur adipiscing elit. Praesent malesuada magna: Sed nisi.
            Nulla quis sem at nibh elementum imperdiet.</p>
            <h3>4. Content Ownership</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            gravida dolor sit amet lacus accumsan et viverra justo commodo. You
            retain ownership of the content you create within Diary.
            By using the app, you grant us a limited license to use, store, and
            display this content to improve our services.</p>
            <h3>5. Prohibited Conduct</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fermentum euismod interdum. The following actions are strictly
            prohibited: Lorem ipsum dolor sit amet: Quisque facilisis justo eu
            diam auctor, non aliquam ipsum viverra. Sed fermentum nisl non:
            Mauris tempus lorem at cursus aliquet.</p>
            <h3>6. Limitation of Liability</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget urna quis elit dapibus iaculis nec quis urna.
            Under no circumstances shall Diary be liable for any
            indirect or consequential damages resulting from your use of the
            app.</p>
            <h3>7. Modifications to the Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ullamcorper ligula eu justo bibendum, nec sagittis risus
            sollicitudin. We reserve the right to modify or discontinue,
            temporarily or permanently, any part of the service with or without
            notice.</p>
            <h3>8. Termination</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
            est eget dolor fermentum, et consequat ipsum interdum. We may
            terminate or suspend access to our service at any time, without
            prior notice, for any reason.</p>
            <h3>9. Changes to Terms of Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            turpis ut quam pretium gravida nec sit amet magna. These terms may
            be updated periodically, and we will notify you of any significant
            changes.</p>
            <h3>10. Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you have
            any questions about these Terms, please contact us at [Contact
            Information].</p>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default TermsOfService;
