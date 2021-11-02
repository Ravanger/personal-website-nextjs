import Image from "next/image"

export const data = {
  title: "Next.js Project 2",
  year: "2021",
  siteUrl: "www.arynn.ca",
  sourceUrl: "www.github.com",
  mainImage: "/work/next-js-project-demo/cover.png",
  tags: ["Next.js", "Typescript", "Strapi"],
  snippet:
    "This will be a description snippet.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maecenas turpis nunc purus dapibus mi molestie.Condimentum ut odio condimentum diam magna lobortis. Woop woop woop.",
  body: (
    <>
      <p>
        This is going to be the long description. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Facilisis egestas adipiscing felis neque,
        sed donec.
      </p>
      <p>
        Tincidunt dictum maecenas donec elementum dictum posuere. Eget pharetra
        venenatis dictumst donec diam.
      </p>
      <p>
        Volutpat dictumst placerat tortor placerat velit nulla leo sit sed.
        Enim, est mauris, sapien, lectus. A nulla adipiscing egestas lorem a
        lorem vel ut proin. Volutpat nunc ultricies et platea.
      </p>
      <Image src="/work/next-js-project-demo/main.png" alt={"Main image"} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
        scelerisque ipsum euismod mollis sed. Tincidunt arcu mattis aliquam in a
        ipsum. Lectus nam elit gravida mattis eu in est massa. Eget senectus
        neque neque et fermentum vel, ipsum. Justo consectetur justo nam
        ultrices dolor amet. Auctor eu a fermentum nisi, nulla et risus
        pulvinar.
      </p>
      <p>
        Consectetur urna pulvinar scelerisque mollis volutpat. Pretium metus,
        sollicitudin viverra malesuada sapien tincidunt. Volutpat quam.
      </p>
    </>
  ),
}
