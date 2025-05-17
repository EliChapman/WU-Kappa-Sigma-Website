import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-KS_green dark:text-black text-neutral-300 py-6 text-center">
      <p className="mb-2 font-semibold">Follow Us</p>
        <div className="flex gap-4 justify-center mb-4">
            <a
                href="https://www.instagram.com/kappasigma_wu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full ring-2 dark:ring-black ring-white flex items-center justify-center hover:ring-pink-500 transition"
            >
                <FontAwesomeIcon
                icon={faInstagram}
                className="dark:text-black text-white group-hover:text-pink-500 w-5 h-5"
                />
            </a>

            <a
                href="https://www.facebook.com/WashburnKappaSigma"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full ring-2 dark:ring-black ring-white flex items-center justify-center hover:ring-blue-500 transition"
            >
                <FontAwesomeIcon
                icon={faFacebookF}
                className="dark:text-black text-white group-hover:text-blue-500 w-5 h-5"
                />
            </a>
            </div>
      <p className="text-sm dark:text-black text-neutral-300 opacity-70">© 2025 Kappa Sigma - Gamma-Nu Chapter</p>
    </footer>
  )
}
