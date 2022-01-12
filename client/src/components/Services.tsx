import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <div className="flex flex-col mf:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 my-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">
            Services that we <br /> continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is the main goal in anything online. We guarantee a safe and secure experience for all of our users."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is the main goal in anything online. We guarantee a safe and secure experience for all of our users."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is the main goal in anything online. We guarantee a safe and secure experience for all of our users."
        />
      </div>
    </div>
  );
};
