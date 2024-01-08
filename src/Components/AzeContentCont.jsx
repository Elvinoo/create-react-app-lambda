import React from "react";
import homeStyle from "../Pages/HomePage.module.css";
import style from "../Pages/AboutAze.module.css";
import oldCity2 from "../Assets/Images/web-images/old-city2.svg";
export default function AzeContentCont() {
  return (
    <div className={homeStyle.wrapper}>
      <div className={style.about_aze}>
        <h3 className={homeStyle.medium_20px}>
          Azerbaijan, officially the Republic of Azerbaijan, is the state
          located in the Caucasus region. Rich in oil, the country is located in
          Asia Transcaucasia, south of the mountainous watershed that separates
          it conventionally from Europe.
        </h3>
        <div className={style.info_with_photo}>
          <div className={style.gen_info}>
            <h6>General Information</h6>
            <h6>Hospitality</h6>
            <h6>Cuisine</h6>
            <h6>Geography</h6>
            <h6>Climate</h6>
            <h6>Population and Ethnicity</h6>
            <h6>Languages</h6>
            <h6>Political structure</h6>
          </div>
          <div className={style.main_info}>
            <p>
              Azerbaijan, officially the Republic of Azerbaijan, is the state
              located in the Caucasus region. Rich in oil, the country is
              located in Asia Transcaucasia, south of the mountainous watershed
              that separates it conventionally from Europe. Azerbaijan is the
              largest country in the Caucasus both in terms of area and
              population, bordering the Caspian Sea to the east, Russia to the
              north, Georgia and Armenia to the west, and Iran to the south.
              From geographic point of view, the State of Azerbaijan is not the
              European one, however, it is often considered as such thanks to
              historical and cultural considerations. In fact, Azerbaijan is a
              member of the Council of Europe. The country is also a member of
              the European Broadcasting Union (EBU) and therefore, it
              participates in the Eurovision Song Contest, won in 2011 and
              hosted the following year. Hospitality Guests are given the places
              of honor in the Azerbaijani traditions and treated with the utmost
              respect. Those who will have the opportunity to meet or stay with
              a family in Azerbaijan, definitely, they will see well-known
              Azerbaijani hospitality. The traditions of hospitality in
              Azerbaijan have come a long way; however, there are also modern
              manners that the families welcome the guests today. In a classical
              piece of Azerbaijani literature "Dede-Gorgud Dastani", it is said
              that "let the houses that no longer welcome guests collapse".
              There are considerable number of hotels of different types in
              Azerbaijan that can satisfy any visitor. Great number of hotels
              are situated in Baku, including budget and luxury hotels. Varied
              and very rich cuisine As the main dishes, Azerbaijani cuisine has
              Plov with saffron aroma, coal-roasted kebabs, freshly-caught fish,
              sweet fruit and honey for dessert. The cuisine of Azerbaijan is
              full of flavours and surprises and is a vital part of the country
              and its culture. The flavours and ingredients used reflect the
              ingredients grown or available in Azerbaijan, although the
              commercial exchanges have brought new flavours from the entire
              world. Even the cooking techniques reflect the lifestyle and local
              traditions, and the names of the Azerbaijani dishes derive from
              the terms used in Azerbaijan. Hospitality is an important part of
              the Azerbaijani culture, and the cuisine is not an exception.
              Guests are treated to an abundance of dishes, and leaving food on
              the plate can be considered rude, even if you are already full.
              Food holds sacred place and sharing your food, even bread with
              another person creates a strong bond. Food culture is very rich.
              For example, the Dolma (stuffed grape leaves) and its central
              place in the Azerbaijani culture and among families have been
              recognized by the UNESCO Intangible Cultural Heritage. Many dishes
              are delicious and healthy, which is why Azerbaijan is a country of
              centenarians. Beef and mutton are common, the same as poultry,
              fish, fruit and vegetables. The spices include dill, coriander,
              mint, chive and basil. They can be found in many of dishes, giving
              them rich and full flavours. The result is a wide variety of
              dishes that are hearty and nutritious, full of familiar and
              unusual flavours. But wait, that’s not all - there are endless
              foods to try in Azerbaijan. If you would like a hearty soup (like
              Piti) or a quick snack (like Kutab) or something to satisfy a
              sweet tooth (Pakhlava), you will find more to explore. The more
              you travel to Azerbaijan, the more you will discover, as every
              region (and every cook) has their own recipes that bring new
              flavours and delights Geography Territory of the country covers
              the area of 86 600 km². It is located on the southern slopes of
              the Caucasus. Densely inhabited part of the country extends around
              the downstream of the Kura River that drains into the Caspian Sea,
              which washes the entire eastern part of Azerbaijan. The country
              borders Russia to the north, Armenia and Georgia to the west, and
              Iran to the south. Nakhchivan Autonomous Republic is enclosed
              between Armenia, Iran and Turkey. The capital is Baku city, and
              another important city is Ganja. The question whether Azerbaijan
              can be considered a transcontinental country lying on both sides
              of Asia and Europe is controversial. Having regarded the
              Kuma-Manych Depression as the natural boundary between Europe and
              Asia, the whole territory of Azerbaijan, in fact, would be on the
              Asian continent. If this border is along the Caucasian watershed
              or the Kura River and Rioni River, then a part of the Azerbaijani
              territory would be in Europe. Azerbaijan is mostly mountainous.
              Climate In winter, the Greater Caucasus protects the country from
              polar influences, while summers are very hot. Towards the south
              from the capital instead, autumn is very rainy, while the rest of
              the country has a pleasant climate. 9 out of 11 climate zones are
              present in Azerbaijan. Population The current population of
              Azerbaijan is about 10 million. Ethnicity Azerbaijan is a
              multi-ethnic country. The population is mainly composed of
              Azerbaijanis (approximately 90%). Language The official language
              is Azerbaijani, a Turkic language, written in Azerbaijani with the
              Latin alphabet, which replaced the Cyrillic alphabet. There is a
              small Russian-speaking minority (3.5%), Lezgi (1.9%) in the north
              and Talish (1.8%) in the south of the country. Obviously, as a
              legacy of the Soviet period, most of the Azerbaijani population
              speaks Russian fluently. Currently, majority of young people speak
              English well enough. Political structure The structure of the
              political system in Azerbaijan was redefined by way of adoption of
              new Constitution on 12 November 1995. According to Article 23 of
              the Constitution, the state symbols of the Republic of Azerbaijan
              are the State Flag, the State Emblem and the State Anthem. The
              Government of Azerbaijan is based on the principle of separation
              of powers: legislative power, executive power and judicial power.
              Legislative power is exercised by the unicameral National Assembly
              (Milli Mejlis). Given the particular status of autonomy of
              Nakhchivan, powers, similar to those of the Milli Mejlis, are
              attributed to the Ali Mejlis of Nakhchivan Autonomous Republic.
              The executive power is vested in the President, who is elected for
              a seven-year term by way of direct election. The judicial power is
              exercised by the Constitutional Court, the Supreme Court and the
              courts of appeal, general courts and other specialised courts of
              the Republic of Azerbaijan.
            </p>
          </div>
          <div>
            <img src={oldCity2} alt="old city" />
          </div>
        </div>
      </div>
    </div>
  );
}
