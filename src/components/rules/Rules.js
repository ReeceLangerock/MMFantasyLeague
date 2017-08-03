import React from "react";
import "./../../style/Rules.css";

const Rules = props => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="">

        <h1 className="rules-title">
          Mansion Men League Bylaws
        </h1>
        <div className="rules-section-container">
          <h1 className="section-header">
            Preamble
          </h1>
          <p>
            All 12 of the following individuals (Charles Coxe, Kevin Dobkin, Jason Knaak, Jeffery Douglas Langefeld, Stephan Langerock, James Ouska, Sean Quill, Matthew Reschke, Bryan Steger, Michael Unverricht, Alex Warner and Thomas Ward III) hereby agree to participate perpetually in a competitive fantasy football keeper league.
          </p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Draft
          </h1>
          <p>
            The league shall use a snake style draft, reversing the draft order at the conclusion of each round until the completion of the 16th round of the draft.
          </p>
          <p>Each owner must draft a roster which shall satisfy the requirements of a starting lineup. (minimum of 1 QB, 4 RB, 4 WR, 1 TE, 1 DST, 1 K)</p>
          <p>Draft position is determined on a year by year basis as follows:</p>
          <p>
            The winner of the previous seasons Consolation Tournament will be the first to choose their 1st Round draft position (and, by effect, their corresponding position in each following round) for the following year’s draft. The second place finisher of the Consolation Tournament will be the second to choose their draft position for the following year’s draft….Sixth place in the Consolation Tournament will be sixth to select their draft position.
          </p>
          <p>
            Sixth place in the Championship Tournament will be the seventh to choose their draft position for the following year’s draft. Fifth place in the Championship Tournament will be eighth to select their draft position for the following year’s draft….until finally the League Champion fills in the last remain position in the following year’s draft.
          </p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            League Year
          </h1>
          <p>
            The League Year shall commence once all owners have a complete roster and all individuals have agreed there are no amendments to be made to this document, or at the beginning of the 1st game of the 1st week of the NFL Regular Season as determined by the NFL, whichever occurs first. The League Champion shall be decided at the conclusion of the 16th week of the NFL Regular Season. Each of these 16 weeks shall consist of head to head matchups including all 12 teams in the league. The first 13 weeks shall make up the Regular Season, where every team will compete in a head to head matchup and the result shall count towards the team's Regular Season Record. The final 3 weeks shall consist of a Championship Tournament and a Consolation Tournament.
          </p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Trades
          </h1>
          <p>Players involved in trades will exchange rosters at the time the trade is executed and approved.</p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Free Agency
          </h1>
          <p>
            A player not on a team’s roster or Injured Reserve will be considered a free agent. Free agent players will be acquired through a waiver bid process. At the start of each regular season, each of the 12 teams will be allocated $133 waiver dollars. Teams may swap dollars in a standard trade process, but dollars will never be added to circulation after the initial disbursement. At the conclusion of the league season the remaining balance of waiver dollars will be forfeit and will not carry over to the next season.
          </p>
          <p>
            Every day (except Tuesdays) teams will have the opportunity to bid on free agent players. The deadline for bids each day is 12pm EST (11 AM CST, 10 AM MST). At this time the team who has placed the highest bid will be awarded the free agent onto their roster. If the team does not have an open roster spot, they will concurrently release a player off of their roster and into the free agent pool. This player will be available to be bid upon and acquired at the subsequent waiver deadline.
          </p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Playoffs
          </h1>
          <p>
            The Championship Tournament shall consist of 6 teams, including the champion of each League Division and 4 additional teams who shall own the greatest Regular Season record. If there is a tie in record, total points shall serve as tiebreaker.
            Each League Division Champion shall have a bye week in the first round of the Championship Tournament. The League Division Champion who owns a superior Regular Season Record shall be considered the 1 seed. The other League Division Champion shall be considered the 2 seed. The remaining 4 teams shall be seeded according to their Regular Season Record, with total points again serving as tiebreaker
          </p>
          <p>The following is the Championship Tournament bracket.</p>
          <img alt="Playoff Bracket" src="" />

          <p>
            The winner of the Championship matchup shall be considered the Mansion Men League Champion. The loser of the Championship matchup shall be considered 2nd place. Additional matchups shall determine 3rd-6th places in the Championship Tournament
          </p>
          <p>
            The Consolation Tournament shall consist of the 6 teams who do not participate in the Championship Tournament. These 6 teams shall participate in a tournament that is logistically identical to the Championship Tournament, where the team with the best regular season record is the 1 seed and the team with the worst record of the regular season is the 6 seed.
          </p>

        </div><div className="rules-section-container">
          <h1 className="section-header">
            Financials
          </h1>
          <h5>
            Regular Season Payouts
          </h5>
          <ul>
            <li>
              Best regular season record: $200
            </li>
            <li>
              Most regular season points: $150
            </li>
            <li>
              Weekly high score: $25
            </li>
          </ul>
          <h5>
            Playoff Payouts
          </h5>
          <ul>
            <li>
              Champion: $500
            </li>
            <li>
              Runner-up: $300
            </li>
            <li>
              3rd Place: $100

            </li>
            <li>
              Playoff Points Champion: $100
            </li>
          </ul>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Keepers
          </h1>
          <p>
            Each team shall select at most 4 players on their roster at the conclusion of the League Year to be “Protected” in the subsequent year’s draft. The round the player is eligible to be “Protected” in shall equate to the round in which the player was drafted in the Draft of the previous League Year, minus 2 rounds. E.g. if the player was drafted in the 10th round of the 2016 draft then they can be “protected” in the 8th round of the 2017 draft. This rule applies to players universally, regardless of if, or how, they change rosters during the League Year, except the following exclusions.
          </p>

          <h3>
            Franchise Player
          </h3>
          <p>
            If a team selects a player who has Rookie* status, as determined by the NFL, in the 1st round of the Draft, that player shall have Franchise Player status indefinitely for, and only for, the team that drafts him. Franchise Player status allows a player to be protected in the 16th round of all subsequent drafts until the Franchise Player status is surrendered. Franchise Player status is surrendered, and never regained, immediately and indefinitely, at the same moment that the player leaves the roster of the initial, drafting, team. If the player is traded or dropped, even if the player is dropped and never acquired by another team, and then reacquired by his initial team, or if he is reacquired by his initial team in any manner, the Franchise Player status will be surrendered and in the following Draft the player will be “Unprotectable” and will enter in to the pool of draft-eligible players.
            {" "}
          </p>
          <h3>
            7/31/14 Amendment
          </h3>
          <p>
            If a team has never surrendered a Franchise Player’s Franchise status, but has used a 1st round pick on a rookie, the team has 2 options...It can continue to protect the original Franchise Player, and the rookie drafted in the first round will be unprotectable. OR, it can use the Franchise status on the new rookie and surrender the Franchise status of the previous Franchise Player. The previous Franchise Player will be protectable in Round [16-(3 x Years Protected)]. So if the original Franchise player was protected for 2 seasons, he will be protectable in the 10th round. In any circumstance in which the original team protects that player, his protectability will be calculated in a +3 manner. If that team trades or releases the player, his protectability will be calculated on a +2 basis for other teams. So, the year after the surrendered Franchise player is protected in the 10th round, he can be protected by his original team in the 7th round. He can be protected by other teams in the 8th round. If the player is protected in the 8th round, and then winds back to his original team, he is again protectable on a +2 basis in the subsequent draft. Once a new team protects a surrendered Franchise status player, he is protectable on a +2 basis for all teams.
          </p>
          <h3>
            Non-franchise Rookies
          </h3>
          <p>
            When a player with NFL Rookie status is drafted in any round of the fantasy draft other than the first round, he shall have +1-round protectability for his initial, drafting team, and only ever for his initial, drafting team. That +1 protectability is surrendered in all the same ways and circumstances as Franchise Player status is surrendered (detailed above). e.g. Unvy drafted Rookie Tyler Eifert in the 10th round of the 2013 fantasy draft and maintained +1 protectability throughout the season. Unvy can protect Tyler Eifert in the 9th Round of the upcoming 2014 fantasy draft. Whereas... Reece drafted Rookie Cordarelle Patterson in the 11th round of the 2013 fantasy draft. Cordarelle Patterson is also on Reece’s end-of-2013-season roster, but Cordarelle Patterson changed teams multiple times throughout the season. He has surrendered his +1 protectability and is protectable in the 9th round of the upcoming 2014 fantasy draft.
          </p>
          <h3>Previously Undrafted Players</h3>
          <p>
            Players who were not selected in the draft immediately preceding the current League Year shall have their “Protectable” status determined by the waiver wire bid amount for which they were last acquired. The waiver wire bid amount shall be rounded to the nearest power of 10, including 0. That value shall be divided by 10, and here forward shall be referred to as “X.” The player will then be “Protectable” in the (15-X) round. E.g. A previously undrafted player who is acquired (and retained through the conclusion of the League Year) for $4 dollars is protectable in the 15th round of the subsequent draft (15-0=15) A player acquired (and retained through the conclusion of the League Year) for $16 shall be “Protectable” in the 13th round of the subsequent draft (15-2=13). If a player is not on the roster of any team at the conclusion of the League Year, he cannot attain “Protectable” status for any team, and he enters the pool of draft-eligible players in the subsequent Draft
          </p><p>
            Unless otherwise applicable, whether a player is initially acquired via direct draft or by being protected, their “Protected” status in the subsequent draft shall be determined by the round in which their name appears on the Draft Board of the most recent draft.

          </p>
        </div>
        <div className="rules-section-container">
          <h1 className="section-header">
            Addendum

          </h1>
          <p>
            Offseason changes to this document shall be made according to the simple majority decision of all participating individuals. If a vote results in a tie, it shall equate to an unsuccessful change to the document.
          </p>
          <p>
            In-season changes to this document shall only occur when there is a consensus vote, or if some voters abstain and all participating voters agree
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default Rules;
