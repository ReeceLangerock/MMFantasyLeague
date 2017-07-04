import React from "react";

const Rules = props => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6">

        <h1>
          Mansion Men League Bylaws
        </h1>
        <div className = "well">
        <h2><u>Preamble</u></h2>
        <p>
          All 12 of the following individuals (Charles Coxe, Kevin Dobkin, Jason Knaak, Jeffery Douglas Langefeld, Stephan Langerock, James Ouska, Sean Quill, Matthew Reschke, Bryan Steger, Michael Unverricht, Alex Warner and Thomas Ward III) hereby agree to participate perpetually in a competitive fantasy football keeper league.
        </p>
        <p>
          <i>
            *Offseason changes to this document shall be made according to the simple majority decision of all participating individuals.  If a vote results in a tie, it shall equate to an unsuccessful change to the document.
          </i>
        </p>
        <p>
          <i>
            *In-season changes to this document shall only occur when there is a consensus vote, or if some voters abstain and all participating voters agree
          </i>
        </p>
        <p>
          The buy-in for the Mansion Men Fantasy Football League will be increased to $150, effective for the 2015 league year.  The payouts will be as follows-
        </p>
        <hr />
        <h2><u>Cash Payout</u></h2>

        <h3>
          Weekly Point Champion
        </h3>
        <p>
          Each regular season week (13 total) will have a $25 payout to the team who scores the most total points.  Ties will split.  There is no limit on how many of these payouts any particular team can win in any season.
          {" "}
        </p>

        <h3>
          Regular season
        </h3>
        <p>Top Regular Season Record - $275</p>
        <p>Regular Season Points Champ - $175</p>
        <h3>
          Playoff Points Championship
        </h3>
        <p>
          This will go to the team that accumulates the most total points in all playoff matchups.  All 12 teams are eligible. Ties split.
        </p>
        <h3>Playoffs</h3>
        <p>League Tournament Champ - $550 </p>
        <p>League Tournament 2nd - $225</p>
        <p>League Tournament 3rd - $150</p>
        <hr />
        <h2><u>Draft</u></h2>
        <p>
          The league shall use a snake style draft.  The owner of the first pick in the 1st round shall have the 12th pick in the 2nd round, and then again the first pick in the 3rd round and so on.  The owner of the second pick in the 1st round shall have the 11th pick in the 2nd round, and then again the second pick in the 3rd round and so on and so forth as determined by the owners draft position in the 1st round until the completion of the 16th round of the draft.
        </p>
        <p>
          Each owner must draft a roster which shall satisfy the requirements of a starting lineup. (Meaning must select at least 1 Kicker and 1 Def/ST)
        </p>
        <p>
          Draft position is determined on a year by year basis as follows:
        </p>
        <p>
          {" "}
          Each year there will be a Championship Tournament and a Consolation Tournament.  The winner of the Consolation Tournament will be the first to choose their 1st Round draft position (and, by effect, their corresponding position in each following round) for the following year’s draft.  The second place finisher of the Consolation Tournament will be the second to choose their draft position for the following year’s draft….Sixth place in the Consolation Tournament will be sixth to select their draft position.
          {" "}
        </p>
        <p>
          {" "}
          Sixth place in the Championship Tournament will be the seventh to choose their draft position for the following year’s draft.  Fifth place in the Championship Tournament will be eighth to select their draft position for the following year’s draft….until finally the League Champion fills in the last remain position in the following year’s draft.
        </p>
        <hr />
        <h2><u>League Year</u></h2>
        <p>
          The League Year shall commence once all owners have a complete roster and all individuals have agreed there are no amendments to be made to this document, or at the beginning of the 1st game of the 1st week of the NFL Regular Season as determined by the NFL, whichever is sooner.  The League Champion shall be decided at the conclusion of the 16th week of the NFL Regular Season.  Each of these 16 weeks shall consist of head to head matchups including all 12 teams in the league.  The first 13 weeks shall make up the Regular Season, where every team will compete in a head to head matchup and the result shall count towards the teams Regular Season Record.  The final 3 weeks shall consist of a Championship Tournament and a Consolation Tournament.
        </p>
        <p>
          The Championship Tournament shall consist of 6 teams.  These 6 teams will be the 6 teams that own the best Regular Season record (divisions eliminated in 2015). If there is a tie in record, the team who amassed more total points in the regular season shall be considered to possess the superior record.
        </p>
        <p>
          The teams with the 2 best records shalll have a bye week in the first round of the Championship Tournament.  The superior Regular Season Record shall be considered the 1 seed, with seeding decending thusly based on regular season record.
          {" "}
        </p>

        <h3>Championship Bracket</h3>
        <p>The following is the Championship Tournament bracket.</p><ul>
          <h5><u>Round 1 (NFL Week 14)</u></h5>
          <p>3 vs. 6</p>
          <p>4 vs. 5</p>
          <h5><u>Round 2 (NFL Week 15)</u></h5>
          <p>1 vs Lowest Remaining Seed</p>
          <p>
            2 vs Highest Remaining Seed
          </p>
          <h5><u>Championship (NFL Week 16)</u></h5>
          <p>One Remaining Team vs Other Remaining Team</p>
        </ul>
        <p>
          The winner of the Championship matchup shall be considered the Mansion Men League Champion.  The loser of the Championship matchup shall be considered 2nd place.  There will be additional matchups to determine 3rd-6th places in the Championship Tournament
        </p>
        <p>
          The Consolation Tournament shall consist of the 6 teams who do not participate in the Championship Tournament.  These 6 teams shall participate in a tournament that is logistically identical to the Championship Tournament, where the team with the best regular season record is the 1 seed and the team with the worst record of the regular season is the 6 seed.
        </p>
        <hr />
        <h2><u>Keepers</u></h2>
        <p>
          Each team shall be allowed to carry over 4 players on their roster at the conclusion of one League Year to be “Protected” in the Draft of the subsequent League Year.  The round in the Draft the player is eligible to be “Protected” shall equate to the round in which the player was drafted in the Draft of the previous League Year, minus 2.  E.g. if the player was drafted in the 10th round in the previous League Year, they could be “protected” in the 8th round in the subsequent draft.  This rule applies to players universally, regardless of if, or how, they change rosters during the League Year, except the following exclusions.
        </p>
        <h3>Franchise Player</h3>
        <p>
          If a team selects a player who has Rookie* status, as determined by the NFL, in the 1st round of the Draft, that player shall have Franchise Player status indefinitely for the team that drafts him and only, ever, for the team that initially drafts him.  Franchise Player status allows a player to be protected in the 16th round of all subsequent drafts until the Franchise Player status is surrendered.  Franchise Player status is surrendered, and never regained, immediately and indefinitely, at the same moment that the player leaves the roster of the initial, drafting, team for the first time.  If the player is traded or dropped, even if the player is dropped and never acquired by another team, and then reacquired by his initial team, or if he is reacquired by his initial team in any manner, the Franchise Player status will be surrendered and in the following Draft the player will be “Unprotectable” and will enter in to the pool of draft-eligible players.
          {" "}
        </p>
        <p>
          <b>7/31/14 Amendment:</b>
          {" "}
          If a team has never surrendered a Franchise Player’s Franchise status, but has used a 1st round pick on a rookie, the team has 2 options...It can continue to protect the original Franchise Player, and the rookie drafted in the first round will be unprotectable.  OR, it can use the Franchise status on the new rookie and surrender the Franchise status of the previous Franchise Player.  The previous Franchise Player will be protectable in Round [16-(3 x Years Protected)].  So if the original Franchise player was protected for 2 seasons, he will be protectable in the 10th round.  In any circumstance in which the original team protects that player, his protectability will be calculated in a +3 manner.  If that team trades or releases the player, his protectability will be calculated on a +2 basis for other teams.  So, the year after the surrendered Franchise player is protected in the 10th round, he can be protected by his original team in the 7th round.  He can be protected by other teams in the 8th round.  If the player is protected in the 8th round, and then winds back to his original team, he is again protectable on a +2 basis in the subsequent draft.  Once a new team protects a surrendered Franchise status player, he is protectable on a +2 basis for all teams.
        </p>

        <h3>Non-Franchise Rookies</h3>
        <p>
          When a player who has NFL Rookie status is drafted in any round of the fantasy draft other than the first round, he shall have +1-round protectability (instead of the +2-round rule for other drafted players) for his initial, drafting team, and only ever for his initial, drafting team.  That +1 protectability is surrendered in all the same ways and circumstances as Franchise Player status is surrendered (detailed above).  e.g. Unvy drafted Rookie Tyler Eifert in the 10th round of the 2013 fantasy draft and maintained +1 protectability throughout the season.  Unvy can protect Tyler Eifert in the 9th Round of the upcoming 2014 fantasy draft.  Whereas...  Reece drafted Rookie Cordarelle Patterson in the 11th round of the 2013 fantasy draft.  Cordarelle Patterson is also on Reece’s end-of-2013-season roster, but Cordarelle Patterson changed teams multiple times throughout the season.  He has surrendered his +1 protectability and is protectable in the 9th round of the upcoming 2014 fantasy draft.
          {" "}
        </p>
        <h3>Previously Undrafted Players</h3>
        <p>
          Players who were not selected in the draft immediately preceding the current League Year shall have their “Protectable” status determined by the waiver wire bid amount for which they were MOST RECENTLY acquired.  The waiver wire bid amount shall be rounded to the nearest  power of 10, including 0.  That value shall be divided by 10, and here forward shall be referred to as “X.”  The player will then be “Protectable” in the (15-X) round.  E.g. A previously undrafted player who is acquired (and retained through the conclusion of the League Year) for $4 dollars is protectable in the 15th round of the subsequent draft (15-0=15)  A player acquired (and retained through the conclusion of the League Year) for $16 shall be “Protectable”  in the 13th round of the subsequent draft (15-2=13).  If a player is not on the roster of any team at the conclusion of the League Year, he cannot attain “Protectable” status for any team, and he enters the pool of draft-eligible players in the subsequent Draft
        </p>
        <p>
          Unless otherwise applicable, whether a player is initially acquired via direct draft or by being protected, their “Protected” status in the subsequent draft shall be determined by the round in which their name appears on the Draft Board of the most recent draft.
        </p>
        <hr/>
        <h2><u>Free Agency</u></h2>
        <p>
          A player will be considered a free agent any time they are not on the roster or Injured Reserve of any team in the league.  Free agent players will be acquired through a waiver bid process.  Each team will be allocated $133 waiver dollars.  Teams may swap dollars in a standard trade process, but there will never be dollars added in to circulation after the initial allocation of $133 waiver dollars to each of the 12 teams at the beginning of each Regular Season.  If a team completes a season with any balance of waiver dollars remaining, those dollars will not carry over to the next season.
          {" "}
        </p>
        <p>
          Every day (except Tuesdays) teams will have the opportunity to place bids on free agent players.  The deadline for bids each day is 12pm Eastern Time (11 AM Central Time, 10 AM Mountain Time).  At this point all bids will be considered and the team who has placed the highest bid will be awarded the free agent on to their roster.  If the team cannot add another player to their roster, they will concurrently release a player off of their roster and in to the free agent pool.  This player will be available to be bid upon and acquired at the next most immediate waiver deadline.
        </p>
<hr/>
        <h2><u>Trades</u></h2>
        <p>
          {" "}
          Players involved in trades will exchange rosters at the time the trade is executed and approved.

        </p>
      </div>
        </div>
    </div>
  </div>
);

export default Rules;
