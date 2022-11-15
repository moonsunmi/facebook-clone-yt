import Image from "next/image";

const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center">
      {src && (
        <Image className="rounded-full" src={src} width={30} height={30} />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500 cursor-pointer" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
