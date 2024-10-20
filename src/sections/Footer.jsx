import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constans";
const Footer = () => {
  return (
    <footer>
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-12">
        <div className="mt-2">
          <img src={footerLogo} alt="" width={125} height={125} />
          <p className="text-slate-gray pt-5 max-w-sm font-palanquin my-5">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          <div className="flex justify-start items-center gap-7 py-5">
            {socialMedia.map((media) => (
              <div
                key={media.alt}
                className="bg-white w-11 h-11 rounded-full flex justify-center items-center"
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-start w-full flex-wrap ">
          {footerLinks.map((title) => (
            <div key={title.title}>
              <h1 className="text-white text-xl font-montserrat font-bold mb-5 mt-5">
                {title.title}
              </h1>
              <div className="flex flex-col">
                {title.links.map((link) => (
                  <a
                    href={link.link}
                    key={link.name}
                    className="text-slate-gray mt-1 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved By Yusef.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
