import SettingsContent from "@/components/SettingsComponents/SettingsContent";
import SettingsHeader from "@/components/SettingsComponents/SettingsHeader";

const SettingsPage = () => {
  return (
    <section className="flex flex-col gap-4 mx-2 my-2 outline outline-1 outline-slate-700 p-4 rounded-lg lg:w-1/2">
      <SettingsHeader />
      <SettingsContent />
    </section>
  );
};

export default SettingsPage;
