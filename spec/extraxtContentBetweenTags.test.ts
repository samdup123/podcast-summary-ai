import { extractContentBetweenTags } from "../src/extractContentBetweenTags";

import { expect, test, describe } from "bun:test"

const content = `<content><section>
<p>PREROLL: <em>The World and Everything in It</em> is made possible by listeners like us. My name is Nick Woods. I live in Louisville, Kentucky, and I work as an HVAC technician and a resident manager for an impact real estate company which rents to many refugees, immigrants and Americans. I hope you enjoyed today’s program.</p>
<hr />
<p>MYRNA BROWN, HOST: Good morning! The Secretary of Defense upends a plea deal with 9/11 terrorists. Why haven’t the cases been settled sooner?</p>
<p class="indent-left"><em>AUDIO: Terrorists to do not get deals. Never have in this country, never should. </em></p>
<p>PAUL BUTLER, HOST: Also, new Title IX guidelines from the Biden Administration face legal obstacles from concerned parents. Plus, a chef doing community service finds his purpose in serving others.</p>

<p class="indent-left"><em>AUDIO: I’ve never seen love like this, and compassion…</em><br /></p>

<p dir="ltr">Go now in grace and peace.</p>
					<hr class="article-divider mt-4" style="border-top: 1px solid rgb(0, 0, 0);">
				<p class="podcast-transcript-disclaimer">WORLD Radio transcripts are created on a rush deadline. This text may not be in its final form and may be updated or revised in the future. Accuracy and availability may vary. The authoritative record of WORLD Radio programming is the audio record.</p>
			</section>
		</div>
	</div>
  </section>
  </content>`;

describe('Date Extraction', () => {
  test('should be okay', () => {
    console.log(extractContentBetweenTags(content))
    expect(extractContentBetweenTags(content)).
      toBe(content);
  })

});
