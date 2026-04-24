const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'API Docs', 'Support', 'Community'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Compliance'],
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Accredian
            </span>
            <p className="text-slate-400 text-sm mt-4">
              Transforming how organizations learn and grow.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Accredian. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
