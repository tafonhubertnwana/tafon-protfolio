import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StaticImageData } from 'next/image';
// Define the interface for component props
interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  type: string;
}

// Apply the ProjectItemProps type to the component props
const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, projectUrl, type }) => {
  return (
    <div>
      <div className="relative group flex items-center justify-center h-auto w-full rounded-xl p-4 hover:bg-slate-900 hover:dark:bg-slate-400 shadow-xl shadow-gray-400">
        <Image
          src={backgroundImg.src}
          alt={title} // Use the title for the alt attribute to be more descriptive
          className="rounded-xl group-hover:opacity-10"
          layout="fill" // Ensure proper layout for Next.js Image component
          objectFit="cover" // Optional: Adjust how the image fits the container
        />
        <div className="hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
          <h3 className="text-2xl text-white tracking-wider text-center dark:text-black">{title}</h3>
          <p className="pb-4 pt-2 text-white text-center dark:text-black">{type}</p>
          <Link href={projectUrl}>
            <button className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer dark:bg-slate-800 dark:text-white">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
