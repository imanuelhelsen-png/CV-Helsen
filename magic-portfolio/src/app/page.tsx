import { Meta } from "@once-ui-system/core";
import { home, baseURL } from "@/resources";
import HomeContent from "@/components/HomeContent";
import { Projects } from "@/components/work/Projects"; // Import Projects di sini (Server Side)

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <HomeContent>
      {/* Kita masukkan Projects sebagai 'anak' dari HomeContent */}
      {/* Ini aman karena Projects dijalankan di Server, lalu hasilnya dikirim ke HomeContent */}
      <Projects />
    </HomeContent>
  );
}