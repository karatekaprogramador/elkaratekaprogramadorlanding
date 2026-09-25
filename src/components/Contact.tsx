import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/components/LanguageProvider";


type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const { t } = useLanguage();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");


  const formRef = useRef<HTMLFormElement | null>(null);

  const redireccionarWs = () => {
    window.open("https://wa.me/584244017815", "_blank");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Faltan variables de entorno de EmailJS (revisa .env.local).");
      return;
    }

    if (!formRef.current) return;

    try {
      // Anti-spam mínimo (30s)
      const last = Number(localStorage.getItem("last_email_ts") || "0");
      if (Date.now() - last < 30_000) {
        setStatus("error");
        setErrorMsg("Espera 30 segundos antes de volver a enviar.");
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      localStorage.setItem("last_email_ts", String(Date.now()));
      formRef.current.reset();

      setStatus("success");

      // opcional: cerrar el form luego de enviar
      setTimeout(() => setOpenForm(false), 1200);
    } catch {
      setStatus("error");
      setErrorMsg("No se pudo enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("¿Listo para")} <span className="gradient-text">{t("Trabajar Juntos")}</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("Ya sea para un proyecto de desarrollo o para comenzar tu formación en programación, estoy aquí para ayudarte a alcanzar tus metas.")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <button
                onClick={() => {
                  setOpenForm(!openForm);
                  setStatus("idle");
                  setErrorMsg("");
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-3 py-2 rounded-lg font-semibold text-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                {t("Enviar Mensaje")}
              </button>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                <button onClick={redireccionarWs} className="text-primary hover:underline">
                  {t("Escribeme")}
                </button>
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t("Ubicación")}</h3>
              <p className="text-sm text-muted-foreground">{t("Remoto / Presencial")}</p>
            </div>
          </div>

          {openForm && (
            <div className="p-6 rounded-xl bg-card border border-border text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{t("Envíame un mensaje")}</h3>

                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("Cerrar")}
                </button>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder={t("Tu nombre")}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                />

                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder={t("Tu email")}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                />

                <textarea
                  name="message"
                  required
                  placeholder={t("Tu mensaje")}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {t(status === "sending" ? "Enviando..." : "Enviar")}
                </button>

                {status === "success" && (
                  <p className="text-sm text-primary">
                    ✅ {t("Mensaje enviado. Te respondo pronto.")}
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    ❌ {t(errorMsg)}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
