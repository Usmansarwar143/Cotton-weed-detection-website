import { useState } from 'react';
import { LegalModal } from './LegalModal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4 text-muted-foreground">
      <p>
        <strong>1. Information Collection:</strong> As an academic research project, CottonCare does not collect personal identifiable information from its users. Images uploaded for analysis are processed locally or temporarily in memory and are not stored permanently on our servers without explicit consent.
      </p>
      <p>
        <strong>2. Research Purpose:</strong> Any anonymous usage data collected (e.g., performance metrics, error logs) is used strictly for academic research and model improvement purposes.
      </p>
      <p>
        <strong>3. Data Security:</strong> We implement standard security measures to protect the integrity of the application. However, as a research prototype, we recommend against uploading sensitive or confidential data.
      </p>
      <p>
        <strong>4. Changes to Policy:</strong> This policy may be updated as the research project evolves. Users are encouraged to check this section periodically.
      </p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-muted-foreground">
      <p>
        <strong>1. Research Use Only:</strong> CottonCare is an academic research prototype designed for educational and experimental purposes. It is not intended for commercial agricultural decision-making without expert supervision.
      </p>
      <p>
        <strong>2. No Warranty:</strong> The software is provided "as is," without warranty of any kind. The authors and their institutions make no representations regarding the accuracy of the weed detection results in real-world scenarios.
      </p>
      <p>
        <strong>3. User Responsibility:</strong> Users are responsible for verifying any AI-generated recommendations with qualified agricultural experts before applying chemical treatments or making crop management decisions.
      </p>
      <p>
        <strong>4. Intellectual Property:</strong> The underlying models, dataset, and code are part of an academic research initiative. All rights reserved by the respective authors and institutions.
      </p>
    </div>
  );

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} Cotton Weed Detection AI. Academic Research Project.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveModal('privacy')}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Terms of Use
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Built with React & Tailwind CSS | Powered by Deep Learning
            </p>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={privacyContent}
      />

      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Use"
        content={termsContent}
      />
    </footer>
  );
}