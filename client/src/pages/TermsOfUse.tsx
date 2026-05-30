import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <article className="max-w-3xl mx-auto prose-policy">
          <header className="mb-12">
            <p className="text-xs tracking-widest text-gold uppercase mb-3">
              Información legal
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
              Términos de Uso
            </h1>
            <p className="text-sm text-muted-foreground">
              Última actualización: 30 de mayo de 2026
            </p>
          </header>

          <Section title="1. Información general">
            <p>
              Los presentes Términos de Uso (en adelante, "los Términos") regulan
              el acceso y la utilización de este sitio web, cuyo titular es:
            </p>
            <ul>
              <li>
                <strong>Titular:</strong> Hector Díaz González
              </li>
              <li>
                <strong>Domicilio:</strong> Calle Creu dels Molers 39, 08004
                Barcelona, España
              </li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:admin@barberbooster.app">
                  admin@barberbooster.app
                </a>
              </li>
            </ul>
            <p>
              En adelante, "BarberBooster" o "el Titular". El acceso al sitio web
              implica la aceptación plena y sin reservas de estos Términos.
            </p>
          </Section>

          <Section title="2. Objeto">
            <p>
              Este sitio web tiene como finalidad ofrecer información sobre los
              servicios de BarberBooster, entre ellos sistemas de citas
              personalizados, webs de reservas y posicionamiento en Google Maps
              para barberías, así como permitir el contacto con el Titular.
            </p>
          </Section>

          <Section title="3. Condiciones de uso">
            <p>
              El usuario se compromete a hacer un uso adecuado y lícito del sitio
              web y de sus contenidos, y en particular se obliga a:
            </p>
            <ul>
              <li>
                No utilizar el sitio web con fines ilícitos o contrarios a la
                buena fe.
              </li>
              <li>
                No introducir o difundir contenidos que puedan dañar los sistemas
                informáticos del Titular o de terceros (virus, malware, etc.).
              </li>
              <li>
                No intentar acceder a áreas restringidas, ni realizar acciones que
                puedan perjudicar el funcionamiento del sitio.
              </li>
              <li>
                Facilitar información veraz en los formularios de contacto.
              </li>
            </ul>
          </Section>

          <Section title="4. Propiedad intelectual e industrial">
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos,
              diseño, código fuente, marcas y demás elementos) son titularidad
              del Titular o de terceros que han autorizado su uso, y están
              protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p>
              Queda prohibida su reproducción, distribución, comunicación pública
              o transformación sin autorización expresa y por escrito del
              Titular.
            </p>
          </Section>

          <Section title="5. Responsabilidad">
            <p>
              El Titular no garantiza la disponibilidad y continuidad permanente
              del sitio web, ni se hace responsable de los daños y perjuicios que
              puedan derivarse de su falta de disponibilidad o de fallos técnicos.
            </p>
            <p>
              Asimismo, el Titular no se responsabiliza del contenido de sitios
              web de terceros a los que se pueda acceder mediante enlaces desde
              este sitio.
            </p>
          </Section>

          <Section title="6. Enlaces a terceros">
            <p>
              Este sitio web puede contener enlaces a páginas de terceros. El
              Titular no asume ninguna responsabilidad sobre la información,
              contenidos o servicios que pudieran aparecer en dichos sitios, que
              tendrán carácter meramente informativo.
            </p>
          </Section>

          <Section title="7. Protección de datos">
            <p>
              El tratamiento de los datos personales que el usuario facilite a
              través del sitio web se rige por nuestra{" "}
              <Link href="/privacidad">Política de Privacidad</Link>, que forma
              parte integrante de estos Términos.
            </p>
          </Section>

          <Section title="8. Modificaciones">
            <p>
              El Titular se reserva el derecho a modificar en cualquier momento
              los presentes Términos, así como los contenidos y servicios del
              sitio web. Las modificaciones entrarán en vigor desde su publicación
              en esta página.
            </p>
          </Section>

          <Section title="9. Legislación aplicable y jurisdicción">
            <p>
              Los presentes Términos se rigen por la legislación española. Para la
              resolución de cualquier controversia que pudiera derivarse del
              acceso o uso del sitio web, las partes se someten a los juzgados y
              tribunales que correspondan conforme a la normativa aplicable.
            </p>
          </Section>
        </article>
      </div>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
