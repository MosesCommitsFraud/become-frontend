'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Footer2 from '@/components/footer2'

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <Header />
            <div className="w-full max-w-8xl mx-auto mb-24"> {/* Added 'mb-12' for space */}
                <div className="text-3xl font-bold mb-4">Impressum</div>
                <div className="prose prose-sm max-w-none">
                    <h2 className="text-xl font-semibold mt-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Moritz Schäfer<br />
                        Coblitzallee 1-9<br />
                        68163 Mannheim
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Kontakt</h2>
                    <p>
                        E-Mail: moritz.schaefer@become-consulting.de<br />
                        Tel.: +49 15141625905
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>
                        Moritz Schäfer<br />
                        Coblitzallee 1-9<br />
                        68163 Mannheim
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Datenschutzerklärung</h2>
                    <h3 className="text-lg font-semibold mt-2">1. Datenschutz auf einen Blick</h3>
                    <h4 className="text-base font-semibold mt-2">Allgemeine Hinweise</h4>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>

                    <h4 className="text-base font-semibold mt-2">Datenerfassung auf dieser Website</h4>
                    <h5 className="text-sm font-semibold mt-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h5>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle&#34; in dieser Datenschutzerklärung entnehmen.
                    </p>

                    <h5 className="text-sm font-semibold mt-1">Wie erfassen wir Ihre Daten?</h5>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>

                    <h5 className="text-sm font-semibold mt-1">Wofür nutzen wir Ihre Daten?</h5>
                    <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <h5 className="text-sm font-semibold mt-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                    <p>
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                    </p>

                    <h5 className="text-sm font-semibold mt-1">Analyse-Tools und Tools von Drittanbietern</h5>
                    <p>
                        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                    </p>
                    <p>
                        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                    </p>

                    <h3 className="text-lg font-semibold mt-2">2. Hosting</h3>
                    <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

                    <h4 className="text-base font-semibold mt-2">Externes Hosting</h4>
                    <p>
                        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                    </p>
                    <p>
                        Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p>
                        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                    </p>
                    <p>Wir setzen folgenden Hoster ein:</p>
                    <p>
                        Strato AG<br />
                        Otto-Ostrowski-Straße 7,<br />
                        10249 Berlin
                    </p>

                    <h4 className="text-base font-semibold mt-2">Auftragsverarbeitung</h4>
                    <p>
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                    </p>

                    <h3 className="text-lg font-semibold mt-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                    <h4 className="text-base font-semibold mt-2">Datenschutz</h4>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                </div>
            </div>
            <Footer />
            <Footer2 />
        </div>
    )
}
