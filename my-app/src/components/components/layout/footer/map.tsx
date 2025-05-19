export function MapSection() {
  return (
    <div className="w-full h-[450px] pr-10">
      <iframe
        className="w-full h-full  rounded-lg rounded-lg shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8518.847406971356!2d29.032776458804868!3d40.98438465188387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab870784d1389%3A0x2bf4921764859e70!2zw5xsa2VyIFN0YWR5dW11IEZlbmVyYmFow6dlIMWew7xrcsO8IFNhcmFjb8SfbHUgU3BvciBLb21wbGVrc2k!5e0!3m2!1str!2str!4v1747407999956!5m2!1str!2str"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
