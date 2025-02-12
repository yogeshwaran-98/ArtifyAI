import { companyLogos } from "../constants";
import { brainwaveSymbol } from "../assets";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      <div className="flex items-center justify-center">
        <img
          className=""
          src={brainwaveSymbol}
          width={50}
          height={40}
          alt="Brainwave"
        />
        <h1 className="  z-10 pl-3 text-white text-2xl font-bold">ArtifyAI</h1>
      </div>
    </div>
  );
};

export default CompanyLogos;
