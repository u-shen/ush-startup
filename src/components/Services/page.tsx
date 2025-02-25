import { ServicesData } from "@/lib/Data";

export default function Services() {
  return (
    <section className="services container mx-auto justify-between gap-8 my-32">
      <div className="seaction-header grid grid-cols-2 gap-8">
        <div className="image flex-grow border border-2">
          <div></div>
        </div>
        <div className="motion flex flex-col gap-4 justify-start">
          <h2 className="text-5xl">Les Services Motion</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa,
            facilis adipisci provident cupiditate dolore pariatur vitae
            assumenda quis, beatae iure temporibus accusantium atque nostrum
            incidunt, autem iusto? Ad, fugiat, optio iusto inventore quod
            exercitationem sit error voluptas consectetur incidunt temporibus
            mollitia ullam maiores sapiente aliquid atque? At totam autem enim
            nostrum debitis dolorem molestias et iste omnis? Eaque veritatis
            doloribus architecto temporibus iure soluta minima sint eveniet
            nihil accusamus tempore, numquam quisquam nobis, atque cum magni
            magnam animi culpa esse voluptatem reiciendis non dolorum? Suscipit,
            nisi expedita aspernatur neque beatae eveniet tempore sit cum ab
            odio architecto illum ea delectus distinctio. Aspernatur nobis quos
            voluptate doloribus dolorum dolorem, natus magnam neque deserunt
            atque officia suscipit illo beatae, nesciunt, incidunt ratione
            voluptates et eveniet corrupti officiis blanditiis ipsum soluta.
            Temporibus possimus porro, unde explicabo ullam est dicta fugit
            laboriosam aut officia incidunt vel neque reprehenderit voluptates
            iure. Corrupti totam a, harum iure nulla facere rerum. Est
            dignissimos consectetur ducimus laudantium distinctio maxime fugit
            hic officia quibusdam repudiandae commodi, laboriosam aut voluptate
            assumenda harum omnis vitae ratione quaerat quasi labore laborum.
            Nisi sequi omnis ut eum blanditiis quasi laborum minima possimus
            repellendus? Cumque beatae numquam praesentium odio pariatur illum!
            Velit fuga vitae quos temporibus vel facilis iste architecto officia
            unde! Molestias deleniti maxime, maiores nemo impedit doloribus esse
            laudantium exercitationem hic, alias fugit, vel laboriosam
            distinctio aperiam quas facere blanditiis nam cupiditate temporibus
            totam aliquam. Esse, ad aliquid quia atque modi saepe quos. Eligendi
            officia veritatis cumque et laborum deleniti voluptatum beatae natus
            aperiam, dolorum rerum obcaecati quo cupiditate. Dolorum dolore sunt
            pariatur cum atque. Ad tenetur nostrum qui! Maxime provident sit
            nisi, error aliquid, vel incidunt quisquam consectetur placeat
            dolorum nulla, odit nemo! Labore laudantium nemo nihil dolores,
            ratione reprehenderit, delectus minima esse dolor quam praesentium?
            Similique accusantium commodi hic.
          </p>
        </div>
        <h4 className="text-4xl font-bold">Les Services</h4>
        <div className="services-data">
          {ServicesData.map((service) => {
            return <div>{service.title}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
