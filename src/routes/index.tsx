import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bernardoPhoto from "@/assets/bernardo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <style>{pageStyles}</style>

      {/* NAV */}
      <nav id="navbar" style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none" }}>
        <a className="nav-logo" href="#hero">
          Bernardo <span>Motta</span>
        </a>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#abordagem">Abordagem</a></li>
          <li><a href="#areas">Áreas</a></li>
          <li><a href="#atendimento">Atendimento</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Agendar Consulta</a>
        <div
          className="hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          role="button"
        >
          <span></span><span></span><span></span>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <a href="#sobre" onClick={closeMobile}>Sobre</a>
        <a href="#abordagem" onClick={closeMobile}>Abordagem</a>
        <a href="#areas" onClick={closeMobile}>Áreas</a>
        <a href="#atendimento" onClick={closeMobile}>Atendimento</a>
        <a href="#contacto" onClick={closeMobile}>Contacto</a>
        <a className="nav-cta" href="#contacto" onClick={closeMobile}>Agendar Consulta</a>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-circle c1"></div>
        <div className="hero-bg-circle c2"></div>
        <div className="hero-content">
          <div className="hero-tag">Psicólogo Clínico e da Saúde · Online</div>
          <h1 className="hero-h1">
            Cuidar da mente<br />
            quando o corpo<br />
            <strong>também sofre</strong>
          </h1>
          <p className="hero-sub">
            Acompanhamento psicológico especializado para quem vive com dor crónica
            e doenças crónicas. Uma abordagem humana, baseada em evidência científica.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contacto">Agendar Consulta</a>
            <a className="btn-secondary" href="#sobre">Saber Mais</a>
          </div>
        </div>
        <div className="hero-image-col">
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src={bernardoPhoto}
              alt="Bernardo Motta, Psicólogo Clínico"
              width={768}
              height={1024}
            />
            <div className="hero-photo-badge">
              <div className="badge-num">100%</div>
              <div className="badge-label">Atendimento Online</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          Explorar
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre">
        <div className="container">
          <div className="sobre-grid sobre-grid--single">
            <div className="sobre-text reveal">
              <span className="section-tag">Quem Sou</span>
              <h2 className="section-title">
                Bernardo Motta,<br /><em>Psicólogo Clínico</em>
              </h2>
              <div className="divider"></div>
              <p>
                Sou Bernardo Motta, psicólogo clínico com Mestrado em Psicologia Clínica
                pelo ISPA - Instituto Universitário de Ciências Psicológicas, Sociais e da
                Vida, a realizar o Ano Profissional Júnior (APJ) pela Ordem dos Psicólogos
                Portugueses.
              </p>
              <p>
                A minha especialização nasceu de um interesse profundo pela interligação
                entre mente e corpo. Vivemos num mundo onde a medicina ainda tende a
                separar o que é inseparável: quem vive com dor crónica ou doenças crónicas
                não necessita apenas de cuidados físicos, necessita que a sua experiência
                emocional, os seus pensamentos e o seu contexto de vida sejam igualmente
                valorizados.
              </p>
              <p>
                Por isso, a minha prática baseia-se no modelo <strong>biopsicossocial</strong>:
                uma visão integrada que reconhece que a saúde e o sofrimento resultam da
                combinação de fatores biológicos, psicológicos e sociais. Não trato
                diagnósticos, acompanho pessoas.
              </p>
              <div className="sobre-highlights">
                {[
                  { i: "🎓", l: "Formação", v: "Mestrado em Psicologia Clínica, ISPA" },
                  { i: "🏥", l: "Membro", v: "Ordem dos Psicólogos Portugueses" },
                  { i: "💻", l: "Modalidade", v: "Consultas 100% Online" },
                  { i: "🌍", l: "Disponibilidade", v: "Todo o território nacional" },
                ].map((h) => (
                  <div className="highlight-item" key={h.l}>
                    <span className="hi-icon">{h.i}</span>
                    <div className="hi-label">{h.l}</div>
                    <div className="hi-value">{h.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABORDAGEM */}
      <section id="abordagem">
        <div className="container">
          <span className="section-tag reveal">Como Trabalho</span>
          <h2 className="section-title reveal">
            Terapias com <em>evidência científica</em>
          </h2>
          <div className="divider reveal"></div>
          <p className="abordagem-intro reveal">
            As abordagens que utilizo em sessão são reconhecidas internacionalmente pela
            sua eficácia no tratamento da dor crónica, doenças crónicas e sofrimento
            psicológico. Não existe um modelo único, adapto a minha prática a cada
            pessoa e ao que faz mais sentido para o seu processo.
          </p>
          <div className="abordagem-grid reveal">
            {[
              {
                n: "01", a: "ACT", t: "Terapia de Aceitação e Compromisso",
                d: "Em vez de lutar contra a dor ou contra os pensamentos difíceis, aprendemos a relacionar-nos com eles de forma diferente, com mais flexibilidade e clareza sobre o que verdadeiramente importa. A ACT ajuda a viver uma vida com sentido, mesmo quando a dor não desaparece.",
              },
              {
                n: "02", a: "TCC", t: "Terapia Cognitivo-Comportamental",
                d: "Identificamos os padrões de pensamento e de comportamento que amplificam o sofrimento, por exemplo, o catastrofismo da dor ou a evitação de atividades. Através de estratégias práticas e baseadas em evidência, trabalhamos em conjunto para os transformar.",
              },
              {
                n: "03", a: "TCC-Mindfulness", t: "TCC Baseada em Mindfulness",
                d: "A atenção plena (mindfulness) integrada na TCC permite desenvolver uma consciência mais compassiva do momento presente. Esta abordagem é especialmente útil para lidar com ciclos de ruminação, ansiedade e o desgaste emocional associado à doença crónica.",
              },
            ].map((c) => (
              <div className="abordagem-card" key={c.n}>
                <div className="ac-num">{c.n}</div>
                <div className="ac-abbr">{c.a}</div>
                <h3 className="ac-title">{c.t}</h3>
                <p className="ac-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas">
        <div className="container">
          <span className="section-tag reveal">Especialização</span>
          <h2 className="section-title reveal">Áreas de <em>Atuação</em></h2>
          <div className="divider reveal"></div>
          <p className="areas-intro reveal">
            O meu foco central são as pessoas que convivem diariamente com dor crónica e
            doenças crónicas, uma realidade que vai muito além dos sintomas físicos e
            que afeta profundamente a qualidade de vida, as relações e a identidade de
            quem com ela vive.
          </p>
          <div className="areas-grid">
            <div className="area-card reveal">
              <div className="area-icon">🧠</div>
              <h3>Psicologia da Dor Crónica</h3>
              <p>A dor crónica não é "só física". O sofrimento emocional, o medo, a fadiga e o isolamento são parte integrante da experiência. Trabalho para ajudar a reconquistar qualidade de vida e autonomia, mesmo com dor presente.</p>
              <div className="area-conditions">
                {["Fibromialgia", "Dor lombar crónica", "Dor neuropática", "Cefaleia crónica"].map(
                  (t) => <span key={t} className="condition-tag">{t}</span>
                )}
              </div>
            </div>
            <div className="area-card reveal">
              <div className="area-icon">🫀</div>
              <h3>Doenças Crónicas e Saúde</h3>
              <p>Viver com uma doença crónica implica um processo de adaptação psicológica constante. Acompanho pessoas a lidar com o impacto emocional do diagnóstico, das limitações e das incertezas associadas à doença.</p>
              <div className="area-conditions">
                {["Lúpus", "Artrite Reumatoide", "Esclerose Múltipla", "Síndrome de Fadiga Crónica"].map(
                  (t) => <span key={t} className="condition-tag">{t}</span>
                )}
              </div>
            </div>
            <div className="area-card reveal">
              <div className="area-icon">💭</div>
              <h3>Ansiedade e Depressão</h3>
              <p>Frequentemente associados à dor e à doença crónica, a ansiedade e a depressão merecem atenção especializada. Trabalho para que possas recuperar o sentido de controlo, esperança e bem-estar no dia a dia.</p>
            </div>
            <div className="area-card reveal">
              <div className="area-icon">⚡</div>
              <h3>Burnout e Sobrecarga Emocional</h3>
              <p>O desgaste de gerir a doença, o trabalho e as relações pode ser avassalador. O acompanhamento psicológico ajuda a restabelecer limites, recuperar energia e encontrar um ritmo de vida mais sustentável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento">
        <div className="container">
          <div className="atendimento-grid">
            <div>
              <span className="section-tag reveal">Como Funciona</span>
              <h2 className="section-title reveal">Atendimento <em>Online</em></h2>
              <div className="divider reveal"></div>
              <div className="atendimento-features">
                {[
                  { i: "🌐", h: "100% Online", p: "As consultas são realizadas por videochamada, eliminando barreiras de deslocação, especialmente importantes para quem vive com dor ou fadiga. Disponível para todo o território nacional." },
                  { i: "🔒", h: "Confidencialidade garantida", p: "Todas as sessões e comunicações estão protegidas pelo sigilo profissional, deontologia da Ordem dos Psicólogos Portugueses e legislação de proteção de dados." },
                  { i: "👥", h: "Para adolescentes, jovens adultos e adultos", p: "Acompanho jovens a partir dos 16 anos, jovens adultos e adultos. As sessões são adaptadas à faixa etária, necessidades e contexto de cada pessoa." },
                ].map((f) => (
                  <div className="feature-item reveal" key={f.h}>
                    <div className="feature-icon">{f.i}</div>
                    <div className="feature-text">
                      <h4>{f.h}</h4>
                      <p>{f.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="atendimento-cta-box reveal">
                <h3 className="cta-box-title">Pronto para<br /><em>dar o primeiro passo?</em></h3>
                <p className="cta-box-sub">Entre em contacto através de qualquer um dos canais abaixo. Respondo a todas as mensagens com a máxima brevidade e discrição.</p>
                <div className="cta-options">
                  <a className="cta-option" href="https://wa.me/351911028788" target="_blank" rel="noopener noreferrer">
                    <span className="co-icon">💬</span> WhatsApp — 911 028 788
                  </a>
                  <a className="cta-option" href="mailto:bernardo@ayresdamotta.pt">
                    <span className="co-icon">✉️</span> bernardo@ayresdamotta.pt
                  </a>
                  <a className="cta-option" href="tel:+351911028788">
                    <span className="co-icon">📞</span> Chamada — 911 028 788
                  </a>
                  <a className="cta-option" href="https://linktr.ee/bernardoayresdamotta" target="_blank" rel="noopener noreferrer">
                    <span className="co-icon">🔗</span> Ver todos os links
                  </a>
                </div>
                <p className="cta-note">Confidencialidade e sigilo profissional garantidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <div className="container">
          <div className="contacto-grid">
            <div className="contacto-info reveal">
              <span className="section-tag">Contacto</span>
              <h2 className="section-title">Vamos <em>falar?</em></h2>
              <div className="divider"></div>
              <p>
                Dar o primeiro passo é muitas vezes o mais difícil. Não precisas de ter
                tudo claro na cabeça, basta uma mensagem. Estou aqui para responder às
                tuas dúvidas com atenção e sem julgamento.
              </p>
              <p className="catch-line">Vamos trilhar juntos esse caminho.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">✉️</div>
                  <div className="ci-text">
                    <div className="ci-label">Email</div>
                    <a href="mailto:bernardo@ayresdamotta.pt">bernardo@ayresdamotta.pt</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">📱</div>
                  <div className="ci-text">
                    <div className="ci-label">WhatsApp / Chamada</div>
                    <a href="tel:+351911028788">911 028 788</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">🌐</div>
                  <div className="ci-text">
                    <div className="ci-label">Modalidade</div>
                    Atendimento 100% Online — todo Portugal
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">🏛️</div>
                  <div className="ci-text">
                    <div className="ci-label">Membro da OPP</div>
                    Ordem dos Psicólogos Portugueses<br />
                    <span style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>
                      Nº de cédula a adicionar brevemente
                    </span>
                  </div>
                </div>
              </div>
              <div className="social-row">
                <a className="social-btn" href="https://instagram.com/psico.bernardomotta" target="_blank" rel="noopener noreferrer">
                  📸 &nbsp; @psico.bernardomotta
                </a>
                <a className="social-btn" href="https://linktr.ee/bernardoayresdamotta" target="_blank" rel="noopener noreferrer">
                  🔗 &nbsp; Linktree
                </a>
              </div>
            </div>
            <div className="contacto-form-note reveal">
              <h3>Como funciona o processo?</h3>
              <p>Não tens de preencher formulários. A marcação é feita de forma simples e humana:</p>
              <div className="form-steps">
                {[
                  ["Entra em contacto", "por WhatsApp, email ou chamada — da forma que for mais confortável para ti."],
                  ["Respondo em breve", "para perceber o que te trouxe aqui e esclarecer qualquer dúvida que tenhas."],
                  ["Marcamos uma primeira consulta", "num horário que se adapte à tua disponibilidade, por videochamada."],
                  ["Começamos o teu processo", "ao teu ritmo, num espaço seguro, confidencial e de acolhimento."],
                ].map(([b, t], i) => (
                  <div className="form-step" key={i}>
                    <div className="step-num">{i + 1}</div>
                    <div className="step-text"><strong>{b}</strong> {t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">Bernardo <span>Motta</span> — Psicólogo Clínico</div>
            <div className="footer-links">
              <a href="#sobre">Sobre</a>
              <a href="#abordagem">Abordagem</a>
              <a href="#areas">Áreas</a>
              <a href="#atendimento">Atendimento</a>
              <a href="#contacto">Contacto</a>
              <a href="https://instagram.com/psico.bernardomotta" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Bernardo Motta. Todos os direitos reservados.</p>
            <p className="footer-opp">Membro da Ordem dos Psicólogos Portugueses</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const pageStyles = `
nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 4rem; background: rgba(13,27,53,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(184,196,212,0.12); transition: box-shadow .3s; }
.nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 500; color: var(--silver-light); letter-spacing: 0.04em; text-decoration: none; }
.nav-logo span { color: var(--terra-light); }
.nav-links { display: flex; gap: 2.5rem; list-style: none; margin:0; padding:0; }
.nav-links a { color: var(--silver); text-decoration: none; font-size: 0.8rem; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.3s; }
.nav-links a:hover { color: var(--terra-light); }
.nav-cta { background: var(--terra); color: white; padding: 0.6rem 1.6rem; border-radius: 2px; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; transition: background 0.3s; }
.nav-cta:hover { background: var(--terra-light); }
.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.hamburger span { width: 24px; height: 2px; background: var(--silver-light); transition: all 0.3s; }

#hero { min-height: 100vh; background: var(--navy); display: grid; grid-template-columns: 1fr 1fr; align-items: center; position: relative; overflow: hidden; }
.hero-bg-circle { position: absolute; border-radius: 50%; pointer-events: none; }
.hero-bg-circle.c1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(196,120,90,0.08) 0%, transparent 70%); top: -100px; right: -100px; }
.hero-bg-circle.c2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(184,196,212,0.06) 0%, transparent 70%); bottom: -80px; left: 30%; }
#hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(184,196,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,196,212,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }

.hero-content { padding: 8rem 4rem 6rem 8rem; position: relative; z-index: 2; animation: fadeUp 1s ease both; }
.hero-tag { display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(196,120,90,0.15); border: 1px solid rgba(196,120,90,0.3); color: var(--terra-light); font-size: 0.72rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; padding: 0.45rem 1rem; border-radius: 2px; margin-bottom: 2rem; }
.hero-tag::before { content: '●'; font-size: 0.5rem; }
.hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 300; line-height: 1.12; color: #fff; margin-bottom: 1.5rem; letter-spacing: -0.01em; }
.hero-h1 em { font-style: italic; color: var(--silver-light); }
.hero-h1 strong { font-weight: 500; color: var(--terra-light); font-style: normal; }
.hero-sub { font-size: 1rem; color: var(--silver); line-height: 1.75; max-width: 460px; margin-bottom: 2.5rem; font-weight: 300; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-primary { background: var(--terra); color: white; padding: 0.9rem 2.2rem; border-radius: 2px; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.06em; text-decoration: none; text-transform: uppercase; transition: background 0.3s, transform 0.2s; display: inline-block; }
.btn-primary:hover { background: var(--terra-light); transform: translateY(-2px); }
.btn-secondary { background: transparent; color: var(--silver-light); padding: 0.9rem 2.2rem; border-radius: 2px; border: 1px solid rgba(184,196,212,0.3); font-size: 0.85rem; font-weight: 400; letter-spacing: 0.06em; text-decoration: none; text-transform: uppercase; transition: border-color 0.3s, color 0.3s; display: inline-block; }
.btn-secondary:hover { border-color: var(--silver-light); color: white; }

.hero-image-col { position: relative; z-index: 2; display: flex; align-items: flex-end; justify-content: center; height: 100vh; animation: fadeUp 1.2s 0.2s ease both; }
.hero-photo-wrap { position: relative; width: 380px; }
.hero-photo-wrap::before { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 280px; height: 420px; background: linear-gradient(180deg, transparent 0%, rgba(196,120,90,0.15) 100%); border-radius: 200px 200px 0 0; z-index: 0; }
.hero-photo { position: relative; z-index: 1; width: 100%; max-width: 360px; display: block; margin: 0 auto; filter: drop-shadow(0 20px 60px rgba(0,0,0,0.4)); clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%); height: auto; }
.hero-photo-badge { position: absolute; bottom: 60px; left: -20px; background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(184,196,212,0.2); padding: 1rem 1.4rem; border-radius: 4px; z-index: 3; }
.hero-photo-badge .badge-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 500; color: var(--terra-light); line-height: 1; }
.hero-photo-badge .badge-label { font-size: 0.68rem; color: var(--silver); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.2rem; }
.hero-scroll-hint { position: absolute; bottom: 2.5rem; left: 8rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-light); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; animation: fadeUp 1.4s 0.6s ease both; }
.scroll-line { width: 40px; height: 1px; background: var(--text-light); }

section { padding: 6rem 0; }
.container { max-width: 1140px; margin: 0 auto; padding: 0 2rem; }
.section-tag { display: inline-block; font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--terra); font-weight: 500; margin-bottom: 1rem; }
.section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 400; line-height: 1.2; color: var(--navy); margin-bottom: 1.2rem; }
.section-title em { font-style: italic; color: var(--terra); }
.divider { width: 48px; height: 2px; background: var(--terra); margin-bottom: 2rem; }

#sobre { background: var(--beige-light); }
.sobre-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: center; }
.sobre-grid--single { grid-template-columns: 1fr; max-width: 820px; margin: 0 auto; }
.sobre-img-wrap { position: relative; }
.sobre-img { width: 100%; border-radius: 4px; display: block; filter: saturate(0.9); height: auto; }
.sobre-img-accent { position: absolute; bottom: -20px; right: -20px; width: 180px; height: 180px; background: linear-gradient(135deg, var(--terra) 0%, transparent 70%); border-radius: 4px; z-index: -1; opacity: 0.4; }
.sobre-img-tag { position: absolute; top: 20px; right: -30px; background: var(--navy); color: var(--silver-light); padding: 0.8rem 1.2rem; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 2px; font-weight: 500; }
.sobre-text p { color: var(--text-mid); line-height: 1.85; font-size: 0.98rem; margin-bottom: 1.2rem; font-weight: 300; }
.sobre-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
.highlight-item { background: #fff; border: 1px solid rgba(196,120,90,0.15); border-radius: 4px; padding: 1.2rem 1.4rem; }
.highlight-item .hi-icon { font-size: 1.4rem; margin-bottom: 0.5rem; display: block; }
.highlight-item .hi-label { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--terra); font-weight: 500; margin-bottom: 0.3rem; }
.highlight-item .hi-value { font-size: 0.9rem; color: var(--text-dark); font-weight: 400; line-height: 1.4; }

#abordagem { background: var(--navy); overflow: hidden; position: relative; }
#abordagem::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(196,120,90,0.07) 0%, transparent 70%); pointer-events: none; }
#abordagem .section-title { color: #fff; }
#abordagem .section-tag { color: var(--terra-light); }
.abordagem-intro { color: var(--silver); font-size: 1rem; line-height: 1.8; max-width: 680px; margin-bottom: 3.5rem; font-weight: 300; }
.abordagem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(184,196,212,0.08); border: 1px solid rgba(184,196,212,0.08); }
.abordagem-card { background: rgba(21,35,68,0.7); padding: 2.5rem 2rem; position: relative; overflow: hidden; transition: background 0.4s; }
.abordagem-card:hover { background: rgba(196,120,90,0.08); }
.abordagem-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--terra); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
.abordagem-card:hover::after { transform: scaleX(1); }
.ac-num { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; color: rgba(196,120,90,0.2); line-height: 1; margin-bottom: 1rem; }
.ac-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 500; color: #fff; margin-bottom: 0.8rem; line-height: 1.25; }
.ac-abbr { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--terra-light); margin-bottom: 1rem; font-weight: 500; }
.ac-desc { font-size: 0.88rem; color: var(--silver); line-height: 1.75; font-weight: 300; }

#areas { background: #fff; }
.areas-intro { color: var(--text-mid); font-size: 1rem; line-height: 1.8; max-width: 680px; margin-bottom: 3.5rem; font-weight: 300; }
.areas-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.area-card { background: var(--beige-light); border-radius: 4px; padding: 2rem 2.2rem; border-left: 3px solid var(--terra); transition: transform 0.3s, box-shadow 0.3s; }
.area-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(196,120,90,0.12); }
.area-card .area-icon { font-size: 1.8rem; margin-bottom: 0.8rem; }
.area-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 500; color: var(--navy); margin-bottom: 0.6rem; }
.area-card p { font-size: 0.88rem; color: var(--text-mid); line-height: 1.7; font-weight: 300; }
.area-conditions { margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.4rem; }
.condition-tag { background: rgba(196,120,90,0.1); color: var(--terra); font-size: 0.68rem; letter-spacing: 0.06em; padding: 0.3rem 0.7rem; border-radius: 2px; font-weight: 500; }

#atendimento { background: var(--beige-light); }
.atendimento-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start; }
.atendimento-features { display: flex; flex-direction: column; gap: 1.5rem; }
.feature-item { display: flex; gap: 1.2rem; align-items: flex-start; }
.feature-icon { width: 44px; height: 44px; background: var(--terra); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
.feature-text h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 500; color: var(--navy); margin-bottom: 0.3rem; }
.feature-text p { font-size: 0.87rem; color: var(--text-mid); line-height: 1.65; font-weight: 300; }
.atendimento-cta-box { background: var(--navy); border-radius: 4px; padding: 2.5rem; color: white; position: sticky; top: 100px; }
.cta-box-title { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: #fff; margin-bottom: 0.8rem; line-height: 1.3; }
.cta-box-title em { font-style: italic; color: var(--terra-light); }
.cta-box-sub { font-size: 0.87rem; color: var(--silver); line-height: 1.7; margin-bottom: 2rem; font-weight: 300; }
.cta-options { display: flex; flex-direction: column; gap: 0.8rem; }
.cta-option { display: flex; align-items: center; gap: 0.9rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(184,196,212,0.15); border-radius: 2px; padding: 0.9rem 1.1rem; color: var(--silver-light); text-decoration: none; font-size: 0.87rem; transition: background 0.3s, border-color 0.3s; }
.cta-option:hover { background: rgba(196,120,90,0.15); border-color: var(--terra); color: white; }
.cta-option .co-icon { font-size: 1.1rem; }
.cta-note { font-size: 0.72rem; color: var(--text-light); text-align: center; margin-top: 1.2rem; letter-spacing: 0.04em; }

#agenda { background: linear-gradient(135deg, var(--terra) 0%, #a85e42 100%); padding: 4rem 0; text-align: center; }
#agenda .section-tag { color: rgba(255,255,255,0.7); }
#agenda .section-title { color: white; margin-bottom: 1rem; }
#agenda .divider { background: rgba(255,255,255,0.4); margin: 0 auto 1.5rem; }
.agenda-sub { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 540px; margin: 0 auto 2.5rem; line-height: 1.75; font-weight: 300; }
.agenda-opening { display: inline-flex; align-items: center; gap: 0.7rem; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 0.7rem 1.6rem; border-radius: 2px; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; margin-bottom: 2rem; }
.agenda-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.agenda-btn { background: white; color: var(--terra); padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
.agenda-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.agenda-btn-outline { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.5); padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.85rem; font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; transition: background 0.3s; }
.agenda-btn-outline:hover { background: rgba(255,255,255,0.1); }

#contacto { background: #fff; }
.contacto-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
.contacto-info p { color: var(--text-mid); line-height: 1.8; font-size: 0.97rem; margin-bottom: 2rem; font-weight: 300; }
.catch-line { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.5rem; color: var(--terra); line-height: 1.4; margin-top: -0.5rem; margin-bottom: 2.5rem; }
.contact-items { display: flex; flex-direction: column; gap: 1rem; }
.contact-item { display: flex; align-items: center; gap: 1rem; }
.ci-icon { width: 40px; height: 40px; background: var(--beige-light); border: 1px solid rgba(196,120,90,0.2); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.ci-text { font-size: 0.9rem; color: var(--text-dark); }
.ci-text a { color: var(--terra); text-decoration: none; font-weight: 400; }
.ci-text a:hover { text-decoration: underline; }
.ci-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 0.1rem; }
.social-row { display: flex; gap: 0.8rem; margin-top: 2rem; flex-wrap: wrap; }
.social-btn { display: flex; align-items: center; gap: 0.6rem; background: var(--navy); color: var(--silver-light); padding: 0.7rem 1.2rem; border-radius: 2px; text-decoration: none; font-size: 0.8rem; letter-spacing: 0.06em; font-weight: 400; transition: background 0.3s; }
.social-btn:hover { background: var(--terra); color: white; }

.contacto-form-note { background: var(--beige-light); border-radius: 4px; padding: 2.5rem; border: 1px solid rgba(196,120,90,0.15); }
.contacto-form-note h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 500; color: var(--navy); margin-bottom: 0.8rem; }
.contacto-form-note p { color: var(--text-mid); font-size: 0.9rem; line-height: 1.75; font-weight: 300; margin-bottom: 1.5rem; }
.form-steps { display: flex; flex-direction: column; gap: 1rem; }
.form-step { display: flex; align-items: flex-start; gap: 1rem; }
.step-num { width: 28px; height: 28px; background: var(--terra); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 500; flex-shrink: 0; margin-top: 0.1rem; }
.step-text { font-size: 0.88rem; color: var(--text-mid); line-height: 1.6; }

footer { background: var(--navy); padding: 3rem 0 2rem; }
.footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(184,196,212,0.1); margin-bottom: 1.5rem; }
.footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 400; color: var(--silver-light); }
.footer-brand span { color: var(--terra-light); }
.footer-links { display: flex; gap: 2rem; flex-wrap: wrap; }
.footer-links a { color: var(--text-light); font-size: 0.78rem; text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; transition: color 0.3s; }
.footer-links a:hover { color: var(--terra-light); }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.footer-copy { color: var(--text-light); font-size: 0.75rem; letter-spacing: 0.04em; }
.footer-opp { color: var(--text-light); font-size: 0.72rem; letter-spacing: 0.06em; }

.mobile-menu { display: none; position: fixed; top: 60px; left: 0; right: 0; background: rgba(13,27,53,0.97); backdrop-filter: blur(12px); flex-direction: column; align-items: center; padding: 2rem; gap: 1.5rem; z-index: 99; border-bottom: 1px solid rgba(184,196,212,0.1); }
.mobile-menu.open { display: flex; }
.mobile-menu a { color: var(--silver-light); font-size: 0.9rem; text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase; }

@media (max-width: 900px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links, nav > .nav-cta { display: none; }
  .hamburger { display: flex; }
  #hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-content { padding: 7rem 1.5rem 2rem; }
  .hero-image-col { height: 380px; }
  .hero-photo-wrap { width: 240px; }
  .hero-photo-badge { left: 0; bottom: 20px; }
  .hero-scroll-hint { left: 1.5rem; }
  .sobre-grid, .atendimento-grid, .contacto-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .abordagem-grid { grid-template-columns: 1fr; }
  .areas-grid { grid-template-columns: 1fr; }
  .sobre-img-tag { display: none; }
  .sobre-highlights { grid-template-columns: 1fr 1fr; }
  .atendimento-cta-box { position: static; }
  .container { padding: 0 1.2rem; }
  section { padding: 4rem 0; }
}
`;
