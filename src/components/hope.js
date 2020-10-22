import React from 'react';
import './css/hope.css';

import vaccine from "./img/vacc.jpg";
import indiaRus from "./img/indi.jpg";
import fear from "./img/fear.jpg";
import hospital from "./img/hosp.jpg";
import homeRemedies from "./img/remedies.jpeg";
import ayushKwath from "./img/ayush_kwath.png";
import giloy from "./img/giloy.png";
import aswagandha from "./img/ashwagandha.png";
import amla from "./img/amla.png";
import mulethi from "./img/mulethi.png";
import turmericSalt from "./img/turmeric_salt.png";
import turmeric from './img/turmeric.png';
import chyawanprash from "./img/chyawanprash.png";
import myth2 from "./img/myth2.png";
import asymp from "./img/asymp.jpg";
import homet from "./img/homet.jpg";
import setu from "./img/setu.jpg";
import GooglePlay from "./img/GooglePlay.png";
import appstore from "./img/appstore.png";
import oldoc from "./img/oldoc.jpg";
import pharm from "./img/pharm.png";
import tracking from "./img/tracking.jpg";

const Hope = () => {
    return ( 
        <>
           <div className="artcl">
    <div className="imgbox">
      <iframe src="https://www.youtube.com/embed/2JsWf-2nN1Y" style={{float:"left"}}/>
      <h1 className="hdr2">Are you infected?</h1>
    </div>
    <hr className="partition2"/>
    <div className="imgbox">
      <iframe src="https://www.youtube.com/embed/U8r3oTVMtQ0" style={{float:"right"}}/>
      <h1 className="hdr2">Covid-19 Symptoms Timetable</h1>
    </div>
    <hr className="partition2"/>
    <div className="imgbox">

      <iframe src="https://www.youtube.com/embed/xTvd7oAEyhs" style={{float:"left"}}/>
      <h1 className="hdr2">Home care tips</h1>
    </div>
    <hr className="partition2"/>
    <div className="imgbox">

      <iframe src="https://www.youtube.com/embed/S3d66JvDYvk" style={{float:"right"}}/>
      <h1 className="hdr2">Do you need to go to the Hospital?</h1>
    </div>

  </div>
  <hr className="partition2"/>
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Vaccine Updates</h1>
      <img src={vaccine} alt="vaccine"/>
      <p>Coronavirus still poses a significant threat, but there are no vaccines proven to protect the body against the disease it causes - Covid-19.
        However there are around 40 different coronavirus vaccines in clinical trials - including one being developed by the University of Oxford that is already in an advanced stage of testing.</p>

    </div>
    <h2>Why is a coronavirus vaccine important?</h2>
    <p>The virus spreads easily, and the majority of the world's population is still vulnerable to it. A vaccine would provide some protection by training people's immune systems to fight the virus so they should not become sick.
      This would allow lockdowns to be lifted more safely, and social distancing to be relaxed.</p>
    <h2>What sort of progress is being made?</h2>
    <p>Research is happening at breakneck speed. About 240 vaccines are in early development, with 40 in clinical trials and nine already in the final stage of testing on thousands of people.</p>
    <ul>
      <li>Trials of the Oxford vaccine show it can trigger an immune response, and a deal has been signed with AstraZeneca to supply 100 million doses in the UK alone.</li>
      <li>The first human trial data back in May indicated the first eight patients taking part in a US study all produced antibodies that could neutralise the virus.</li>
      <li>A trial using viral proteins to develop an immune response is underway.</li>
      <li>A group in China showed a vaccine was safe and led to protective antibodies being made. It is being made available to the Chinese military.</li>
      <li>Other completely new approaches to vaccine development are in human trials.</li>
    </ul>
    <p>However, no-one knows how effective any of these vaccines will be.</p>
    <h2>When will we have a coronavirus vaccine?</h2>
    <p>A vaccine would normally take years, if not decades, to develop. Researchers hope to achieve the same amount of work in only a few months.
      Most experts think a vaccine is likely to become widely available by mid-2021, about 12-18 months after the new virus, known officially as Sars-CoV-2, first emerged.
      That would be a huge scientific feat, and there are no guarantees it will work.
      But scientists are optimistic that, if trials are successful, then a small number of people - such as healthcare workers - may be vaccinated before the end of this year.
      It is worth noting that four coronaviruses already circulate in human beings. They cause common cold symptoms and we don't have vaccines for any of them.</p>
    <h2>What still needs to be done?</h2>
    <p>Multiple research groups have designed potential vaccines. However there is much more work to do.
    </p>
    <div className="sidebar-box">
      <ul>
        <li>Trials need to show the vaccine is safe. It would not be useful if it caused more problems than the disease</li>
        <li>Clinical trials will also need to show vaccines provoke an immune response, which protect people from getting sick</li>
        <li>A way of producing the vaccine on a huge scale must be developed for the billions of potential doses</li>
        <li>Medicines regulators must approve it before it can be given</li>

      </ul>
      <p className="read-more">
        <a href="https://www.bbc.com/news/health-51665497" className="button">
          <button type="button" className="btn">Read more</button>

        </a>
      </p>

    </div>
  </div>
  <hr className="partition"/>
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">India-Russia collaboration for Sputnik-V</h1>
      <img src={indiaRus} alt="idia-russia flag" style={{float:"right"}}/>
      <p style={{marginTop :"150px"}}>India and Russia are in talks for collaboration to manufacture Sputnik V – the anti-coronavirus vaccine launched by Moscow earlier this month – and for approval to conduct phase three trials, Union Health Secretary Rajesh Bhushan said on
        Tuesday. Bhushan is also the co-chair of the national Covid-19 vaccine administration task force.</p>

    </div>
    <p>“As far as Sputnik V vaccine is concerned, both India and Russia are in communication,” said Bhushan, according to ANI. “Some initial information has been shared while some detailed information is awaited.” Unidentified government officials
      said Russian Ambassador Nikolay Kudashev had contacted Principal Scientific Adviser K Vijay Raghavan for vaccine-making partnership. Meanwhile, the Indian embassy in Moscow is in talks with the Gamaleya National Centre of Epidemiology and
      Microbiology to get safety and efficacy data on the trials, reported ThePrint.</p>
    <p>Sputnik V has been developed by the Gamaleya National Research Institute of Epidemiology and Microbiology. Russia is the first nation to claim to have developed a coronavirus vaccine. However, various scientists have raised questions on
      registering the vaccine before conducting the phase three trials. This phase takes several months to complete and requires participation from thousands of people. The World Health Organization has said that the real test would be in phase three
      trials, during which 30% protection at population level needed to be established.</p>
    <p>Last week, Russian researchers said the vaccine was currently in the phase three clinical trials. “More than 40,000 people in 45 medical centres are participating in a randomised, double-blind, placebo-controlled multicenter clinical study of
      the efficacy, immunogenicity, and safety of the Sputnik V vaccine in Russia, simultaneously with the vaccination of volunteers from risk groups,” Russian researchers had said last week.</p>
    <p>The phase 1 and 2 clinical trials of the vaccine candidate were completed on August 1. “All the volunteers are feeling well, no unforeseen or unwanted side effects were observed,” researchers from Gamaleya National Institute said. “The
      vaccine-induced strong antibody and cellular immune response. Not a single participant of the current clinical trials got infected with Covid-19 after being administered with the vaccine.”

      The vaccine has received a registration certificate from the Russian Ministry of Health on August 11. Under emergency rules, it can be used to vaccinate the population in Russia. Mass production of the vaccine is expected to start in September.
    </p>
    <p>Over 100 vaccines are being developed around the world to tackle the coronavirus pandemic, according to Reuters. The World Health Organization data shows at least four vaccines are in phase three trials, including those from China and Britain.

      Meanwhile, India’s tally rose to 32.67 lakh on Wednesday after the country registered over 67,000 new cases in the last 24 hours. The toll in the country now stands at 59,449. Globally, the coronavirus has infected more than 2.38 crore people
      and killed 8,18,137 others, according the Johns Hopkins University’s tracker. Over 1.54 crore people across the world have recovered from the infection.</p>

  </div>
  <hr className="partition"/>
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Fear among Non-Covid patients</h1>
      <img src={fear} alt="fear"/>
      <p>New Delhi: Due to the coronavirus pandemic, patients suffering from critical diseases like cancer and those requiring surgeries are delaying hospital visits and thereby endangering their health and even risking their lives, according to some
        doctors.

        A number of medical practitioners said they have even lost patients who could have survived or their situation salvaged had they reported to hospitals in time.

      </p>
      <p>Dr Mandeep S. Malhotra, head of department (head, neck and breast oncoplasty) at Fortis Hospital Vasant Kunj, said two of his patients – an IAS officer and an IT consultant, both aged 45 – had palpable breast lumps in March. Due to fear of
        COVID-19, they neither reported to the hospital nor to their gynaecologists or family doctors and their cancer has now aggravated to Stage 4.</p>
      <p>He also shared another case of a 42-year-old patient who had a relapse of cancer around April while he was in his hometown of Dehradun.

        “He had recovered from oral cancer but during the lockdown period, he had a nodal recurrence. He sent me a picture and I asked him to come back. I told him he can come back after getting required permission. He came back after three months
        and by then the main artery that supplies blood to the brain was involved. Earlier this week, he succumbed to cancer,” Malhotra said.</p>
      <p>The senior doctor said cancer progresses in no time from Stage 2 to Stage 4 without timely treatment and if patients report early, they can be discharged in less time and the treatment costs are lower in comparison to critical state when the
        costs escalate and there is a greater risk involved.</p>
      <p>Doctors say patients are even delaying simple surgeries like gall bladder stone removal which could lead to major issues in the long run.

        According to Dr Manoj Sharma, senior consultant, medicine and in-charge at Medeor Hospital, Qutub Institutional Area, delaying treatment is not the right option. He said hospitals are taking all precautions and adopting all hygienic
        practices.

        Sharma said one of his patients had reported to him about a liver abscess around April but did not return to the hospital after that.

      </p>
      <p>“Ultimately his infection increased and he ended up in a critical condition and after surgery had to stay in the hospital for a week. Had he continued treatment when he was diagnosed, he could have been discharged in two days,” he
        said.Sharma said patients are not reaching out and consulting doctors, which is leading to situations like these and opined that people will have to learn to live with coronavirus.</p>
      <div className="sidebar-box">
        <h2>Patients delaying treatment</h2>
        <p>Dr Chandragouda Dodagoudar, director of medical oncology at Aakash Healthcare in Dwarka, shared a case of a 65-year-old patient who had stage 2 lymphoma. The patient first visited the health facility in March and was advised chemotherapy
          but was very apprehensive due to the coronavirus disease.</p>
        <p className="read-more">
          <a href="https://science.thewire.in/health/non-covid-19-patients-avoiding-hospitals-doctors/" className="button">
            <button type="button" className="btn">Read more</button>

          </a>
        </p>
      </div>
    </div>
  </div>
  <hr className="partition" />
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Hospital Capacity</h1>
      <img src={hospital} alt="hospital"/>
      <p>The coronavirus disease 2019 (COVID-19) news coming from Italy should be sobering to health system leaders throughout the world. We are witnessing an advanced health system stretched beyond its capacity. When the capacity of the system is
        exceeded, rationing decisions may need to be made that extend well beyond patients with COVID-19. On March 11, the Italian College of Anesthesia, Analgesia, Resuscitation, and Intensive Care was forced to publish guidelines for rationing
        care. Infectious disease and epidemiology experts1 have been outlining the worst-case scenarios possible with the unchecked spread of a novel virus, both in terms of immunity and preparedness. Unfortunately, hospital systems are designed for
        average patient loads, not epidemics. Observations from Italy demonstrate what is at stake. When containment fails, the exponential growth of cases can transform a public health emergency into an operational crisis</p>

    </div>
    <h2>What Can We Learn?</h2>
    <p>Operationally, what can be gleaned from the dire situation in Italy to avoid a similar fate in other countries? The geographic and temporal clustering of outbreaks can overwhelm a health care system. Most Italian cases and deaths have been
      concentrated in the northern region of Lombardy, which should concern US states working to manage their own clusters, including Washington and New York. President Trump has imposed sweeping travel restrictions on visitors from China and Europe,
      but these restrictions will have little effect in US regions with widespread community transmission. Public containment measures implemented in recent days will take a week or longer to have an effect; with an incubation period of 2 to 7 days2
      and a wait for test results of 2 to 3 days, new cases reflect infections from more than a week ago.</p>
    <p>Patients with severe disease from COVID-19 require a mean of approximately 13 days of respiratory support.2 Such lengthy treatment time will further stress resources. This time in the system multiplied by the arrival rate (known as Little’s
      law) is a simple but elegant formula for modeling system capacity before a queue develops. In manufacturing or customer service, queues may result in decreased profitability and/or the loss of customers; in critical care medicine, queues can be
      deadly. For example, take a large hospital with 100 beds in the intensive care unit. Assume that at any given time, 70% of these beds are occupied.3 The remaining 30 beds are the effective extra capacity to absorb patients with COVID-19.
      Because of the long treatment time (approximately 13 days), the number of new patients that can be accommodated per day during an extended outbreak is low. Admitting more than 2.3 patients per day (30 beds divided by 13 days) with respiratory
      failure will lead to an unstable system and queues. Italy reported 7087 new cases during a 2-day period between March 14 and March 15, 2020. With as many as 15% of documented infections resulting in severe disease,2 rationing decisions may
      quickly be required.</p>
    <h2>How Can We Prepare?</h2>
    <p>By observing regional outbreaks in the context of Italy’s case growth, we can start to model and anticipate both what the ultimate capacity to provide care will be and when that capacity will be exceeded. Case growth rates of 25% to 35% per
      day are commonplace among affected regions. Based on trends in known cases in a specific locale, we can start to model caseloads under different scenarios. Tools designed for influenza epidemics, such as the Centers for Disease Control and
      Prevention FluSurge, can offer useful estimates. Preparations for expanding capacity should already be underway to address growing regional clusters of transmission (ie, so-called hotspots). Many hospitals have mass casualty protocols for
      catastrophic events; the COVID-19 response could require an equal mobilization of staff and resources but during a sustained period. Nearby hospital systems should communicate early and often, given that efficient case sharing and transport
      between hospitals could become essential. Regional networking among 15 hospitals was part of Lombardy’s early response to the massive surge of patients with COVID-19 while individual hospitals increased capacity</p>
    <p>Bed capacity may not be the most crucial bottleneck for providing critical care. Observing Italy, experts are rightly concerned about the fixed number of ventilators. However, there are many other key factors to consider. Given the risk of
      health care worker infection5 and quarantine, will there be enough staff to provide care? Are there sufficient drug supplies for effective respiratory and cardiovascular support? Are there adequate supplies of personal protective equipment?
      Hospitals have prided themselves on the efficiency that comes with just-in-time supply management and minimizing empty beds, but as a result, they may be ill equipped for an epidemic surge.</p>
    <p>Hospital administrators need to start preparing for worst case scenarios now, and thankfully, most are doing so. Toner and Waldhorn6 have assembled a comprehensive list of preventive actions. This planning and response will require a
      multidisciplinary effort; physicians, nurses, respiratory therapists, pharmacists, environmental services staff, supply chain managers, and many others possess needed expertise. Messaging from hospital leadership must be communicated often and
      clearly. The protection of staff from infection must remain a high priority.</p>
    <h2>What Lies Ahead?</h2>
    <p>Some countries, such as Taiwan,7 have been successful at combating the virus through aggressive testing and containment measures. South Korea, while initially inundated with patients from a rapidly spreading cluster, has successfully mitigated
      spread (at least temporarily) with minimal associated mortality. These examples provide encouragement that a well-executed public health response can minimize the potential for operational crises. The common themes in success have been massive
      testing, adaptive policy recommendations for different regions, and communication by public officials that is constant, transparent, and honest. The public needs to trust public officials and see the good and bad news every day.</p>
    <p>In our interconnected world, the life-and-death consequences of health care needs exceeding the system’s capacity could hit any region at any time. It is imperative to learn the lessons of Italy and Hubei, China: waiting until an exponentially
      increasing epidemic becomes self-evident will ensure that draconian efforts will be required for control, and even with these measures, there will be a significant loss of life. Actions taken now by society and health care systems will
      determine whether history regards 2020 as a great public health achievement or an epic failure of our public health and health care infrastructure.</p>

  </div>
  <hr className="partition" />
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Home Remedies</h1>
      <img src={homeRemedies} alt="home_remedies" className="bigimg"/>
      <p>The Union Health Ministry on Sunday issued several guidelines to manage COVID-19 and provide holistic care to those who are healing from the disease. Apart from general advises such as practising yoga, seeking counselling, having enough
        water and a healthy diet, the ministry also released a long list of home remedies for boosting immunity and making a quick recovery. Here is the complete list of home remedies released by the health ministry and how they can help in
        strengthening immunity and proper recovery post-COVID-19.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={ayushKwath} alt="ayush_kwath" style={{float:"right"}}/>
    <h2 style={{textAlign: "center"}}>Ayush Kwath</h2>
    <p>The ministry suggested drinking 1 cup or 150 ml of Ayush Kwath every day. It is a combination of medicinal herbs like four parts Tulsi (holy basil), two parts Dalchini (cinnamon), two parts Sunthi (ginger root) and one part Krishna Marich
      (black pepper). The ministry has also previously released instructions on how to make this drink at home. Take all the dried ingredients and make a coarse powder. Divide it into tea bags of 3 grams each. It can be added to 150 ml of boiled
      water once or twice a day. You can also add raisins, lemon juice or jaggery to enhance the taste. This combination is said to not only boost immunity but also promote general well-being.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={giloy} alt="giloy"/>
    <h2 style={{textAlign: "center"}}>Sanshamani Vati</h2>
    <p>
      The next prescription by the ministry is to have 1 gram of Sunshmani Vati every day. It is also known as Guduchi ghana vati and is made with the bark of Giloy tree. It is considered useful in treating all types of fevers. It has mild
      anti-inflammatory and anti-pyretic effects, providing benefits to those who are recovering from the after-effects of diseases like COVID-19. Giloy is also useful in expelling toxins arising from undigested food particles that can cause fever.
      It is also helpful in providing relief from headache, indigestion, drop in appetite, body pain and burning sensation. You can either add the extract in the tea or have 1 tablet of 500 mg daily.
    </p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={aswagandha} alt="ashwagandha" style={{float:"right"}}/>
    <h2 style={{textAlign: "center"}}>Ashwagandha</h2>
    <p>The ministry has also advised taking 1-3 grams of ashwagandha powder twice daily for 15 days. Ashwagandha is an ancient medicinal herb that provides a range of health benefits to the body. Recovering from diseases like COVID-19 can be very
      stressful for the body and mind. Ashwagandha is effective in reducing stress and cortisol levels, promoting brain function, strengthening immunity and bringing down blood sugar levels. It also helps combat symptoms of anxiety and depression.
      You can also take ashwagandha supplements of 500 mg twice a day.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={amla} alt="amla"/>
    <h2 style={{textAlign: "center"}}>Amla</h2>
    <p>Another home remedy recommended by the ministry is to have 1 amla fruit or 1-3 grams of amla powder daily. Amla has long been touted for its ability to treat cold, cough and flu. It makes the respiratory system more robust and delivers relief
      from chest congestion. Amla contains chromium that strengthens the heart, which is impacted by COVID-19. It is also loaded with antioxidants that fight free radicals and keep many diseases at bay. The anti-bacterial qualities of amla also
      detoxify your system.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={mulethi} alt="meluthi" style={{float:"right"}}/>
    <h2 style={{textAlign: "center"}}>Mulethi powder</h2>
    <p>Mulethi powder is another ancient medicinal herb prescribed by the health ministry to people who have a dry cough. The dosage recommended is 1-3 grams of mulethi powder twice every day with lukewarm water. Mulethi or liquorice is useful in
      providing quick relief from cough and cold. You can also make a cold and cough relief tea at home by boiling 1-inch mulethi root, 1 tsp grated ginger, 3-4 black peppercorns in 2 cups of water and reducing it to half. If you cannot bear the
      taste, you can add 1 tsp honey to your cup.</p>
  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={turmericSalt} alt="turmeric_salt"/>
    <h2 style={{textAlign: "center"}}>Gargling with turmeric & salt
    </h2>
    <p>Sore throat is another pesky aftereffect of COVID-19. For this, the health ministry advises gargling with warm water containing turmeric and salt. Salt in the solution neutralises the acids in the throat and flushes them away, thus providing
      relief from the burning sensation in the throat and fast healing of irritated mucus membranes. Turmeric plays a significant role in controlling infections, wounds and diseases in the throat. Mix half a teaspoon each of salt and turmeric in one
      cup of warm water and gargle.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={turmeric} alt="turmeric" style={{float:"right"}}/>
    <h2 style={{textAlign: "center"}}>Warm Turmeric milk</h2>
    <p>The next suggestion by the ministry is to drink warm milk with ½ tsp Turmeric every morning and evening. Turmeric milk has therapeutic properties that help the body in recovering from a disease or injury quickly. Haldi doodh is useful in
      speeding up the healing process of the body and shielding it with several ailments and infections. Turmeric also has anti-microbial, anti-allergic and anti-inflammatory properties. You can also add a pinch of powdered black pepper to increase
      the potency of the drink.</p>

  </div>
  <hr className="partition2"/>
  <div className="imgbox2">
    <img src={chyawanprash} alt="chyawanprash"/>
    <h2 style={{textAlign: "center"}}>Chyawanprash</h2>
    <p>Taking 1 tsp or 5 mg of Chyawanprash daily in the morning is recommended by the health ministry. Chyawanprash contains more than 40 ancient medicinal herbs that can stimulate immunity and help in recovering quickly from diseases. It was
      earlier also suggested by the Ministry of AYUSH to have chyawanprash in the morning with milk or lukewarm water to boost immunity. People with diabetes were instructed to take sugar-free chyawanprash.</p>

  </div>
  </div>
  <hr className="partition" />
  <div className="artcl">
    <div className="imgbox">
      <img src={myth2} alt="mythbuster" style={{width:"40%"}}/>
      <h1 className="hdr">MythBusters</h1>
    </div>
    <h2>FACT: Vitamin and mineral supplements cannot cure COVID-19 </h2>
    <p>Micronutrients, such as vitamins D and C and zinc, are critical for a well-functioning immune system and play a vital role in promoting health and nutritional well-being. There is currently no guidance on the use of micronutrient supplements
      as a treatment of COVID-19.
      WHO is coordinating efforts to develop and evaluate medicines to treat COVID-19.</p>
    <h2>FACT: Studies show hydroxychloroquine does not have clinical benefits in treating COVID-19 </h2>
    <p>Hydroxychloroquine or chloroquine, a treatment for malaria, lupus erythematosus, and rheumatoid arthritis, has been under study as a possible treatment for COVID-19. Current data shows that this drug does not reduce deaths among hospitalised
      COVID-19 patients, nor help people with moderate disease.*
      The use of hydoxychloroquine and chloroquine is accepted as generally safe for patients with malaria and autoimmune diseases, but its use where not indicated and without medical supervision can cause serious side effects and should be avoided.
    </p>
    <p>* More decisive research is needed to assess its value in patients with mild disease or as pre- or post-exposure prophylaxis in patients exposed to COVID-19.</p>
    <h2>FACT: People should NOT wear masks while exercising </h2>
    <p>People should NOT wear masks when exercising, as masks may reduce the ability to breathe comfortably.
      Sweat can make the mask become wet more quickly which makes it difficult to breathe and promotes the growth of microorganisms. The important preventive measure during exercise is to maintain physical distance of at least one meter from others.
    </p>
    <h2>FACT: The likelihood of shoes spreading COVID-19 is very low</h2>
    <p>The likelihood of COVID-19 being spread on shoes and infecting individuals is very low. As a precautionary measure, particularly in homes where infants and small children crawl or play on floors, consider leaving your shoes at the entrance of
      your home. This will help prevent contact with dirt or any waste that could be carried on the soles of shoes.
    </p>
    <h2>FACT: The coronavirus disease (COVID-19) is caused by a virus, NOT by bacteria</h2>
    <p>The virus that causes COVID-19 is in a family of viruses called Coronaviridae. Antibiotics do not work against viruses.

      Some people who become ill with COVID-19 can also develop a bacterial infection as a complication. In this case, antibiotics may be recommended by a health care provider.

      There is currently no licensed medication to cure COVID-19. If you have symptoms, call your health care provider or COVID-19 hotline for assistance.</p>
    <h2>FACT: The prolonged use of medical masks* when properly worn, DOES NOT cause CO2 intoxication nor oxygen deficiency

    </h2>
    <p>The prolonged use of medical masks can be uncomfortable. However, it does not lead to CO2 intoxication nor oxygen deficiency. While wearing a medical mask, make sure it fits properly and that it is tight enough to allow you to breathe
      normally. Do not re-use a disposable mask and always change it as soon as it gets damp.

      * Medical masks (also known as surgical masks) are flat or pleated; they are affixed to the head with straps or have ear loops.</p>

    <h2>FACT: Most people who get COVID-19 recover from it</h2>
    <p>Most people who get COVID-19 have mild or moderate symptoms and can recover thanks to supportive care. If you have a cough, fever and difficulty breathing seek medical care early - call your health facility by telephone first. If you have
      fever and live in an area with malaria or dengue seek medical care immediately.</p>
    <div className="sidebar-box">
      <h2>FACT: Thermal scanners CANNOT detect COVID-19</h2>
      <p>Thermal scanners are effective in detecting people who have a fever (i.e. have a higher than normal body temperature). They cannot detect people who are infected with COVID-19. There are many causes of fever. Call your healthcare provider if
        you need assistance or seek immediate medical care if you have </p>
      <p className="read-more">
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters" className="button">
          <button type="button" className="btn">Read more</button>

        </a>
      </p>

    </div>
  </div>
  <hr className="partition" />
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Asymptomatic Covid patients</h1>
      <img src={asymp} alt="asymptomatic"/>
      <p>Blood tests that check for exposure to the coronavirus are starting to come online, and preliminary findings suggest that many people have been infected without knowing it. Even people who do eventually experience the common symptoms of
        COVID-19 don’t start coughing and spiking fevers the moment they’re infected.

        William Petri is a professor of medicine and microbiology at the University of Virginia who specializes in infectious diseases. Here, he runs through what’s known and what isn’t about asymptomatic cases of COVID-19.

      </p>


    </div>
    <h2>How common is it for people to contract and fight off viruses without knowing it?</h2>
    <p>In general, having an infection without any symptoms is common. Perhaps the most infamous example was Typhoid Mary, who spread typhoid fever to other people without having any symptoms herself in the early 1900s.
      My colleagues and I have found that many infections are fought off by the body without the person even knowing it. For example, when we carefully followed children for infection by the parasite Cryptosporidia, one of the major causes of
      diarrhea, almost half of those with infections showed no symptoms at all.
    </p>
    <p>
      In the case of the flu, estimates are that anywhere from 5% to 25% of infections occur with no symptoms.
      For the most part, symptoms are actually a side effect of fighting off an infection. It takes a little time for the immune system to rally that defense, so some cases are more aptly considered presymptomatic rather than asymptomatic.
    </p>
    <h2>How can someone spread coronavirus if they aren’t coughing and sneezing?</h2>
    <p>Everyone is on guard against the droplets that spray out from a coronavirus patient’s cough or sneeze. They’re a big reason public health officials have suggested everyone should wear masks.
      But the virus also spreads through normal exhalations that can carry tiny droplets containing the virus. A regular breath may spread the virus several feet or more.
      Spread could also come from fomites – surfaces, such as a doorknob or a grocery cart handle, that are contaminated with the coronavirus by an infected person’s touch.</p>
    <h2>What’s known about how contagious an asymptomatic person might be?
    </h2>
    <p>No matter what, if you’ve been exposed to someone with COVID-19, you should self-quarantine for the entire 14-day incubation period. Even if you feel fine, you’re still at risk of spreading the coronavirus to others.
    </p>
    <div className="sidebar-box">
      <p>Most recently it has been shown that high levels of the virus are present in respiratory secretions during the “presymptomatic” period that can last days to more than a week prior to the fever and cough characteristic of COVID-19. This
        ability of the virus to be transmitted by people without symptoms is a major reason for the pandemic.</p>
      <p className="read-more">
        <a href="https://theconversation.com/infected-with-the-coronavirus-but-not-showing-symptoms-a-physician-answers-5-questions-about-asymptomatic-covid-19-137029" className="button">
          <button type="button" className="btn">Read more</button>
        </a>
      </p>
    </div>
  </div>
  <hr className="partition" />
  <div className="artcl">
    <div className="imgbox">
      <h1 className="hdr">Home Treatment</h1>
      <img src={homet} alt="hometreatment" style={{float: "right"}}/>
      <p>Many Americans have stocked up on food and other supplies in preparation for social distancing.

        But while you may have enough toilet paper to last through the summer, have you thought about what you’ll need to have on hand if you actually contract COVID-19 and need to self-quarantine?

        Despite shutdowns and other unprecedented steps to slow the spread of COVID-19, epidemiologists believe that a majority of peopleTrusted Source will eventually get the easily transmitted viral disease for which humans have no natural
        immunity.The good news: An estimated 80 percentTrusted Source of those with COVID-19 in China experienced only mild to moderate symptoms.

        That means you can probably recover at home.

        “There are simple steps you can take to help prep for the possibility that you may contract COVID-19 or aid in your recovery if you’ve already tested positive and start to feel mild to moderately symptomatic,” Jennifer Williams, MPH, a
        research scientist and hydration expert at the medical device and consumer products company Abbott, told Healthline.</p>


    </div>
    <h2>Create an action plan</h2>
    <p>“Preparing for a period of home quarantine means making a household plan of action as well as stocking supplies for the duration of the isolation period,” Dr. Lisa Ide, chief medical officer of the national virtual health platform Zipnosis,
      told Healthline.
      “Make sure that you have a list of emergency contacts, a plan to communicate with family, friends, and co-workers, and know-how to get food delivered if possible,” she said.
      “Organize a 2- to 4-week supply of food, cleaning materials such as sanitizing wipes and soap, and basic household staples such as toilet paper and facial tissue,” suggested Ide.
    </p>
    <p>“When you are planning your food supplies, think of food that will store well and be nutritious such as rice, pasta, canned or dried beans, dried fruit, soups, and frozen vegetables as well as pet food,” she said.
      Fresh fruit and vegetables are also important for health and healing.
      “Fruit and vegetables provide loads of essential nutrients and there are ways to extend their shelf-life and make them more convenient,” notes the website Huel, which markets nutritionally complete food with a 12-month shelf life. “For example,
      soups and sauces can be made straight away and then frozen. You can make a concentrated stock which you can then freeze in ice cube trays and, voila, homemade, low-salt stock cubes.”
    </p>
    <h2>Here's a shopping list</h2>
    <h3>Clean Water</h3>
    <p>Water should be at the top of the list of supplies you’ll need in the event you contract COVID-19.
      “COVID-19 is a viral infection and like most viral infections, treatment is all about comfort and keeping well enough while your body heals,” Dr. Roy Benaroch, a clinical assistant professor of pediatrics at Emory University and a pediatrician
      with a private practice in Roswell, Georgia, told Healthline.
      “It’s crucial to stay hydrated, so plenty of fluids, especially if the fever is high,” Benaroch said.</p>
    <p>Williams said that COVID-19 symptoms such as fever, coughing, diarrhea, and vomiting “can easily impact individuals’ fluid intake and contribute to dehydration, and rob the body of key nutrients if healthy foods and fluids are not consumed
      while recovering.”
      “Healthy hydration levels can help your nose by maintaining that the mucous membrane is intact,” she added. “This could help decrease nasal irritation when coughing, sneezing, and even just breathing. Moisture also helps heal broken membranes
      so additional bacteria don’t get into the body.”</p>
    <p>In most instances, tap or bottled water is fine. If you’re relying on bottled water, experts recommend keeping at least a 15-day supply on hand.
      “If you cannot drink your tap water at home safely or if you have a sink that is shared communally by any other people in your home, it’s best to have bottled water that you could keep by your bedside and drink when needed,” Dr. Shirin Peters,
      medical director of the Bethany Medical Clinic in New York, told Healthline.
    </p>
    <p>The National Academies of Sciences, Engineering, and Medicine defines adequate daily fluid intake as 15.5 cups (3.7 liters) of fluids for men and 11.5 cups (2.7 liters) of fluids a day for women, although sick people likely should drink more.
      (About 20 percent of this fluid intake comes from foods).
      In the minority of cases where COVID-19 symptoms include acute gastroenteritis, solutions such as Pedialyte can help prevent dehydration. Sports drinks like Gatorade are another option
    </p>
    <h3>Pain medication</h3>
    <div className="sidebar-box">
      <p>“The most useful medicine is something to decrease headaches, body aches, and fever, like acetaminophen (Tylenol),” said Benaroch.

        “Many people also use ibuprofen (Advil or Motrin), but there has been some concern especially from Europe that ibuprofen is less safe, though there’s no direct evidence that this is true. Still, if you want to be extra careful, use
        acetaminophen instead,” he said.Dr. Larry Burchett, a California emergency physician, recommends 650 </p>
      <p className="read-more">
        <a href="https://www.healthline.com/health-news/how-to-treat-yourself-at-home-if-you-have-a-mild-case-of-coronavirus#Heres-a-shopping-list" className="button">
          <button type="button" className="btn">Read more</button>
        </a>
      </p>
    </div>
  </div>
  <hr className="partition"/>
  <div className="artcl">
    <h1 className="hdr">Technology to the rescue.</h1>
    <div className="imgbox2">
      <img src={setu} alt="Aarogya Setu"/>
      <h2 style={{textAlign:"center"}}>Aarogya Setu</h2>
      <p>
        Aarogya Setu is an Indian open-source COVID–19 "contact tracing, syndromic mapping and self-assessment" digital service, primarily a mobile app, developed by the National Informatics Centre.
      </p>
      <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en">
        <img src={GooglePlay} alt="playstore" className="storeicon"/>
      </a>
      <a href="https://apps.apple.com/in/app/aarogyasetu/id1505825357">
        <img src={appstore} alt="appstore" className="storeicon"/>
      </a>
    </div>
    <hr className="partition2"/>
    <div className="imgbox2">
      <img src={oldoc} alt="tracking apps" style={{float:"right", height: "80%"}}/>
      <h2 style={{textAlign:"center"}}>Online Doctor</h2>
      <p>DocOnline Health provides innovative platform where users can talk to a doctor online via audio/video/chat at anytime & from anywhere!</p>
      <a href="https://play.google.com/store/apps/details?id=com.doconline.doconline&hl=en">
        <img src={GooglePlay} alt="playstore" className="storeicon"/>
      </a>
      <a href="https://itunes.apple.com/us/app/doconline/id1234520016?ls=1&mt=8">
        <img src={appstore} alt="appstore" className="storeicon"/>
      </a>
    </div>
    <hr className="partition2"/>
    <div className="imgbox2">
      <img src={pharm} alt="PharmeasyLogo"/>
      <h2 style={{textAlign:"center"}}>Online medication</h2>
      <p>
        PharmEasy is India's most trusted online medical supply store & top pharmacy website supplying genuine medicines
      </p>
      <a href="https://app.appsflyer.com/com.phonegap.rxpal?c=Footer?pid=Web">
        <img src={GooglePlay} alt="playstore" className="storeicon"/>
      </a>
      <a href="https://app.appsflyer.com/id982432643?c=Footer?pid=Web">
        <img src={appstore} alt="appstore" className="storeicon"/>
      </a>
    </div>
    <hr className="partition2"/>
    <h1 className="hdr">Covid Tracking Apps</h1>
    <div className="imgbox2">
      <img src={tracking} alt="Covid tracking" style={{float: "right"}}/>
      <p>Smartphone apps are playing a big role in the response to the Covid-19 pandemic. These apps are being used to track infected people, issue self-quarantine guidelines, provide latest communication to the citizens and ease the burden on
        healthcare staff. Throughout the world, from South Korea to Poland, the apps have been downloaded by millions of people. European Union is planning to roll out its own app, and has issued guidelines for the same. Apple and Google, the two
        Silicon Valley tech giants, have joined hands for the development of an app that will assist healthcare organizations.</p>
    </div>
    <p>Technology has come to the rescue in diagnosing those affected, identifying hotspots and getting real-time updates. While there is an issue of data privacy at stake, most of the app developers are now trying to put mechanisms in place to
      safeguard user privacy. Have a look at some of the most popular smartphone apps to track Covid-19 outbreak.</p>
    <h2>TraceTogether</h2>
    <p>TraceTogether is a popular smartphone app that can be downloaded by anyone with a Sinagpore mobile number and a Bluetooth-enabled smartphone. It is a contact tracing app that uses Bluetooth to track infected people and notify those who were in
      close proximity to them during the past 15 days. The app doesn’t collect data about GPS location or WiFI/mobile network. When two people using the app are close to each other, both phones will use Bluetooth to exchange a Temporary ID. This
      Temporary ID is generated by encrypting the User ID with a private key held by the Ministry of Health (MOH). It can only be decrypted by MOH, and does not reveal your identity or the other person’s identity. The app has been developed by
      Developed by the Government Technology Agency (GovTech) in collaboration with MOH, and it has become a prototype for many other contact tracing apps in other parts of the world.</p>
    <h2>CovidWatch</h2>
    <p>Developed in collaboration with Stanford University, the app empowers people to protect themselves and their communities without the need of surrendering their privacy. It uses Bluetooth signals to detect users when they are in proximity to
      each other and alerts them anonymously if they were in contact with someone who has tested positive. A distinguishing feature of the app is that any third party, including the government won’t be able to track who was exposed by whom. It has
      been among the first apps to release an open-source protocol for privacy-preserving, decentralized Bluetooth contact tracing.</p>
    <h2>HaMagen</h2>
    <p>Launched by the Health Ministry of Israel, the app uses contact tracing to contain the spread of the deadly contagion. The app allows users to know if in the past 15 days they were close to anyone who has been diagnosed with the virus. Once a
      user installs the app, his movements are tracked using location technology and the information fetched is compared with the ministry data on the whereabouts of those who have been diagnosed. If it transpires that a particular user was indeed in
      proximity with an infected person, the app redirects the person to the health ministry website where he can register for self-quarantine.</p>
    <h2>The Corona DataSpende</h2>
    <div className="sidebar-box">
      <p>This German smartwatch app monitors the spread of coronavirus by collecting crucial signs – pulse rate, body temperature, sleep patterns – from volunteers wearing a smartwatch or a fitness tracker. It checks whether they have developed any
        Covid-19 symptoms or not. The results are then portrayed on an online interactive map that makes it possible for health authorities to take stock of the situation and find out the hotspots.It checks whether they have
      </p>
      <p className="read-more">
        <a href="https://www.geospatialworld.net/blogs/popular-apps-covid-19/" className="button">
          <button type="button" className="btn">Read more</button>
        </a>
      </p>

    </div>

  </div>    
        </>
    );
}

export default Hope;