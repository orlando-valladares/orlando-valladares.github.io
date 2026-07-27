---
title: 'Lost to Mitch'
subtitle: 'Evidence from Nightlight Years and Hurricane Exposure in Central American Municipalities'
excerpt: "**Economics Senior Seminar Paper** · Given major honors for exceptional 60s level paper."
question: "What was the economic impact of Hurricane Mitch (1998) on Central American municipalities over time, and how might this be measured in a context of poor data availability?"
draft_pdf: documents/papers/ECON64.pdf
abstract: |
  How much local economic activity was lost when Hurricane Mitch struck Central America in 1998? This paper estimates part of the loss through a municipality-year panel that combines DMSP-OLS nighttime lights from 1992 to 2013 with physically reconstructed wind, rainfall, and mortality exposure measures in a dynamic difference-in-differences framework. Across specifications, nighttime lights show a post-Mitch dip that closes after roughly four years. In the main wind-damage specifications restricted to municipalities with meaningful pre-Mitch light activity, the wind estimates imply luminosity losses of roughly 10–20 percent in the first two post-storm periods. Unrestricted specifications imply larger, but noisier, losses on the order of 50–60 percent, whereas rainfall and mortality-based exposure measures yield less robust effects.
layout: scroll-story
draft: false
---

<section id="damage" class="story-chapter story-chapter--damage">
  <div class="story-chapter__inner">
    <div class="story-impact-figure">
      {{< story-image src="img/projects/mitch/figure-8-tegucigalpa.jpg" alt="A man looking across buildings and infrastructure destroyed by Hurricane Mitch along the Choluteca River in Tegucigalpa" caption="Figure 8. Hurricane Mitch damage in Tegucigalpa. Damage was concentrated along the Choluteca River; the image shows a form of loss that the strict wind-treatment definitions do not capture." >}}
    </div>
  </div>
</section>

<section id="mitch" class="story-chapter story-chapter--abstract">
  <div class="story-chapter__inner">
    <div class="story-section">
      <div class="story-copy">
        <p class="story-kicker">Central America · October 1998</p>
        <h2>Hurricane Mitch’s devastating impact</h2>
        <p>On October 22, 1998, Mitch formed in the southwestern Caribbean. It reached Category 5, stalled off Honduras’s north coast, then made landfall on October 29 and moved slowly through the mountains. The storm brought catastrophic rain, flooding, and landslides across Central America.</p>
        <p>In the words of President Carlos Flores Facussé, “in 72 hours we lost what took as much as 50 years to build.” This paper asks how much local economic activity was lost, and whether that loss closed over time.</p>
      </div>
      <div class="story-visual">
        {{< story-image src="img/projects/mitch/mitch-track.png" alt="Map of Hurricane Mitch’s observed track and reconstructed wind swaths" caption="Figure 1. Hurricane Mitch track and EBTRK wind swaths. The map shows the observed track and the reconstructed 34-, 50-, and 64-knot wind swaths. Sources: NOAA IBTrACS, Extended Best Track, and project calculations." >}}
      </div>
    </div>
  </div>
</section>

<section id="introduction" class="story-chapter story-chapter--introduction">
  <div class="story-chapter__inner">
    <div class="story-section">
      <div class="story-copy">
        <p class="story-kicker">Introduction</p>
        <h2>The answer is not obvious</h2>
        <p>The answer is not obvious. Evidence and theory point to very different paths after a disaster: creative destruction (Skidmore and Toya 2002), “build back better” capital replacement (Cuaresma, Hlouskova, and Obersteiner 2008; Hallegatte and Dumas 2009), recovery through transfers and migration (Yang 2008), or persistent loss with no full rebound (Field et al. 2012).</p>
        <p>Hsiang and Jina (2014), for example, find that national incomes fall after cyclones and do not recover within twenty years. The closest regional nighttime-lights study finds a 17 percent decrease after Central American windstorms followed by an eighteen-month recovery (Ishizawa, Miranda, and Zhang 2017). This paper asks which path best describes Central American municipalities after Mitch.</p>
      </div>
      <div class="story-visual">
        {{< story-image src="img/projects/mitch/recovery-paths.png" alt="Diagram of competing economic recovery paths after a disaster" caption="Figure 2. Disaster recovery hypotheses in the literature. The schematic spans creative destruction, building back better, recovery to trend, and no recovery." >}}
      </div>
    </div>
  </div>
</section>

<section id="data" class="story-chapter story-chapter--data">
  <div class="story-chapter__inner">
    <div class="story-chapter__heading">
      <p class="story-kicker">Data</p>
      <h2>One outcome, three exposure measures</h2>
    </div>
    <h3 class="story-subsection-title">Outcome</h3>
    <div class="story-section story-data-outcome">
      <div class="story-copy">
        <p class="story-method-card__type">Dependent variable</p>
        <h2>DMSP-OLS stable nighttime lights</h2>
        <p>The DMSP-OLS outcome comes from satellite data. From 1992 to 2013, roughly 1 × 1 km pixels are assigned to GAUL-coded municipalities and added into <em>stable_sum</em>, a municipality-year measure whose pixel values run from 0 to the sensor saturation point of 63. The regressions use <em>log(1 + stable_sum)</em> so zero-light municipalities remain in the sample while very bright places carry less leverage.</p>
        <p>Night lights make annual local comparison possible where censuses and representative surveys are sparse (Donaldson and Storeygard 2016; Henderson, Storeygard, and Weil 2011). They are still a proxy: DMSP measures electrification and infrastructure as well as activity, is coarse and top-coded, exhibits blooming and blur, and lacks on-board calibration (Gibson 2021). VIIRS improves many of those limitations but begins only in 2012 (Elvidge et al. 2017; Gibson 2020).</p>
      </div>
      <div class="story-visual">
        {{< story-image src="img/projects/mitch/nightlights-1998.png" alt="Raw and municipality-level DMSP-OLS nighttime lights in 1998 with the satellite-year series" caption="Figure 3. DMSP-OLS nighttime lights in the Mitch year. The panels move from the raw-light image to municipality stable-light sums and the satellite-year series. Source: NOAA DMSP-OLS stable lights." >}}
      </div>
    </div>
    <h3 class="story-subsection-title">Independent variables</h3>
    <p class="story-data-lede">The three exposure measures mix satellite, meteorological, and reported mortality data. Each sees a different part of Mitch, and each leaves something out.</p>
    <div class="story-method-cards story-method-cards--three" aria-label="Hurricane Mitch exposure measures">
      <article class="story-method-card">
        <p class="story-method-card__type">Independent variable</p>
        <h3>Reconstructed wind exposure</h3>
        <p>NOAA Best Track and Extended Best Track combine post-storm meteorological assessment with evidence from satellites, aircraft reconnaissance, scatterometers, radar, and other observations. The paper reconstructs 50- and 64-knot wind swaths and treats a municipality when at least half its area falls inside one; the broader 34-knot definition is reported in the appendix.</p>
        <h4>What it adds</h4>
        <p>This is the paper’s most physically grounded and spatially explicit exposure family. The thresholds also have an engineering interpretation because wind loading rises approximately with the square of velocity (Landsea et al. 2013; NHC 2017).</p>
        <h4>What it misses</h4>
        <p>Wind cannot capture Mitch’s full hydrological and social geography. A binary threshold also converts a continuous storm footprint into a municipal category.</p>
      </article>
      <article class="story-method-card">
        <p class="story-method-card__type">Independent variable</p>
        <h3>CHIRPS rainfall anomaly</h3>
        <p>CHIRPS—Climate Hazards Group InfraRed Precipitation with Station data—blends satellite-based infrared rainfall estimates with rain-gauge observations. The treatment marks the top decile of municipality-level maximum precipitation during the Mitch window minus the historical average for the same calendar dates.</p>
        <h4>What it adds</h4>
        <p>It measures a physical channel separate from wind in a storm whose most severe damage also came through extreme rain, flooding, and landslides.</p>
        <h4>What it misses</h4>
        <p>A rainfall anomaly is not flood depth. Runoff and flooding depend on rivers, slopes, soil retention, drainage, infrastructure, settlement, and rain that fell before the selected window.</p>
      </article>
      <article class="story-method-card">
        <p class="story-method-card__type">Independent variable</p>
        <h3>Deaths per capita</h3>
        <p>Reported deaths are divided by population at the state or department level. Because mortality is not reported consistently for municipalities, this specification moves from a municipality-year to a department-year nighttime-lights panel.</p>
        <h4>What it adds</h4>
        <p>Mortality works backward from realized severity and can register vulnerability and settlement patterns that lie outside a strict wind swath.</p>
        <h4>What it misses</h4>
        <p>It is more geographically aggregated and downstream from the damage process, so it combines physical exposure with vulnerability rather than isolating one mechanism.</p>
      </article>
    </div>
    <div class="story-wide-figure">
      {{< story-image src="img/projects/mitch/figure-4-primary-treatment-maps.png" alt="Four maps of the main Hurricane Mitch wind, rainfall, and mortality treatment definitions" caption="Figure 4. Primary Mitch treatment maps. Red municipalities are treated and retained by the pre-Mitch median luminosity filter; orange municipalities are treated but excluded by that filter." >}}
    </div>
  </div>
</section>

<section id="strategy" class="story-chapter story-chapter--strategy">
  <div class="story-chapter__inner">
    <div class="story-chapter__heading story-chapter__heading--strategy">
      <p class="story-kicker">Empirical strategy</p>
      <h2>Dynamic difference in differences</h2>
      <p>A difference-in-differences design compares how an outcome changes in exposed places with how it changes over the same period in less-exposed places. Subtracting the second change from the first removes stable differences between the groups and common changes over time. The dynamic version repeats that comparison for each two-year period, making the timing and recovery of the gap visible.</p>
    </div>
    <div class="story-equation story-equation--hero" aria-label="Dynamic difference-in-differences equation">
      <span class="story-equation__lhs">log(1 + NTL<sub>it</sub>)</span>
      <span class="story-equation__equals">=</span>
      <span>&Sigma;<sub>τ ≠ 1996–97</sub> β<sub>τ</sub>(Exposure<sub>i</sub><sup>1998</sup> × 1[t ∈ τ]) + α<sub>i</sub> + λ<sub>t</sub> + ε<sub>it</sub></span>
    </div>
    <div class="story-equation-key">
      <p><strong>β<sub>τ</sub></strong> is the exposed-versus-comparison gap in each two-year period, relative to 1996–97.</p>
      <p><strong>α<sub>i</sub></strong> removes permanent differences between municipalities; <strong>λ<sub>t</sub></strong> removes year shocks shared across the sample.</p>
    </div>
    <div class="story-timeline story-timeline--horizontal" aria-label="Event timeline">
      <div><strong>1992–97</strong><span>Pre-Mitch comparison</span></div>
      <div><strong>1998</strong><span>Mitch; the annual composite mixes pre- and post-storm months</span></div>
      <div><strong>1999–2001</strong><span>The first clean post-storm years and the estimated gap</span></div>
      <div><strong>2002–13</strong><span>Closing gap and later path</span></div>
    </div>
  </div>
</section>

<section id="results" class="story-chapter story-chapter--results">
  <div class="story-chapter__inner">
    <div class="story-chapter__heading">
      <p class="story-kicker">Results</p>
      <h2>A four-to-five-year gap in three specifications</h2>
      <p>Three of the four exposure definitions—64-knot wind, 50-knot wind, and deaths per capita—show treated places separating from comparison places after Mitch, then closing the gap by the 2002–03 period. <strong><em>That is, they suggest a statistically significant nightlight gap which closes after 4–5 years in the most impacted municipalities.</em></strong> The rainfall anomaly does not show the same temporally consistent decline, probably because it is a weak proxy for the flooding mechanism the paper needs to measure.</p>
    </div>
    <div class="story-wide-figure story-wide-figure--result">
      {{< story-image src="img/projects/mitch/figure-6-two-year-paths.png" alt="Two-year nighttime-light paths for four Hurricane Mitch exposure definitions" caption="Figure 6. Two-year nighttime-light paths with unit fixed effects. Wind- and mortality-exposed places separate after Mitch and the gap closes by 2002–03; the rainfall path does not show the same pattern. These panels do not apply year fixed effects or the NTL filter." >}}
    </div>
    <div class="story-result-copy">
      <p>Figure 7 adds year fixed effects to absorb common annual shocks and restricts the sample to municipalities at or above the pre-Mitch median luminosity. In the 64-knot specification, the implied luminosity losses are about 10.3 percent in 1998–99 and 20.5 percent in 2000–01. The 50-knot results are similar: about 15.5 and 20.4 percent. The gap is therefore not only immediate; it is widest in the second two-year period before it closes.</p>
    </div>
    <div class="story-wide-figure story-wide-figure--result">
      {{< story-image src="img/projects/mitch/figure-7-two-year-coefficients.png" alt="Two-year event-study coefficients for four Hurricane Mitch exposure definitions" caption="Figure 7. Two-year coefficient estimates with year fixed effects and the NTL filter. Coefficients are relative to 1996–97; shaded bands are approximate 95 percent confidence intervals." >}}
    </div>
    <div class="story-results-notes">
      <h3>How the census check fits</h3>
      <ul>
        <li><strong>Other normal goods.</strong> The paper checks refrigerator and television ownership in harmonized Honduran census groups. Relative to 1988, the 2001 and 2013 coefficients are null or positive rather than evidence of a persistent negative effect.</li>
        <li><strong>The same data constraint.</strong> Asset measures are available only in 1988, 2001, and 2013. Almost the entire estimated Mitch loss-and-recovery episode lies between those sparse observations, which is precisely the poor-data setting that motivates an annual satellite measure.</li>
        <li><strong>What can be concluded.</strong> The census cannot independently trace the timing of the nightlight dip, but it does not contradict a temporary loss that closes rather than a permanent fall in normal-goods ownership.</li>
      </ul>
    </div>
    <div class="story-sources">
      <p><strong>Source materials.</strong> Orlando Valladares, <em>Lost to Mitch: Evidence from Nightlight Years and Hurricane Exposure in Central American Municipalities</em> (draft, July 2026). Data include NOAA DMSP-OLS, NOAA Best Track and Extended Best Track, CHIRPS precipitation, IPUMS International, and compiled Mitch-impact data.</p>
    </div>
  </div>
</section>
