//EVENTUALLY BREAK THIS OUT TO COMPONENT TO USE WITH BOTH STAT PAGES

<PanelGroup defaultActiveKey="1" accordion>
  <Panel header="Chart Options" eventKey="1">
    <div className="accordion-button-container">
      <div className="well data-selection-container">
        <h1>Seasons</h1>

        <div className="button-container">
          <Button bsStyle="success" className="button-child" name="seasonButton" id="season4" value="4" onClick={this.handleSeasonSelection}>
            2016 Season
          </Button>
          <Button bsStyle="success" className="button-child" name="seasonButton" id="season3" value="3" onClick={this.handleSeasonSelection}>
            2015 Season
          </Button>
          <Button bsStyle="success" className="button-child" name="seasonButton" id="season2" value="2" onClick={this.handleSeasonSelection}>
            2014 Season
          </Button>
          <Button bsStyle="success" className="button-child" name="seasonButton" id="season1" value="1" onClick={this.handleSeasonSelection}>
            2013 Season
          </Button>
          <Button bsStyle="success" className="button-child" name="seasonButton" id="season0" value="0" onClick={this.handleSeasonSelection}>
            2012 Season
          </Button>
        </div>
      </div>
      <div className="well data-selection-container">
        <h1>Statistics</h1>

        <div className="button-container">
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat0" value="wins" onClick={this.handleStatSelection}>
            Wins
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat1" value="losses" onClick={this.handleStatSelection}>
            Losses
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat2" value="win-percentage" onClick={this.handleStatSelection}>
            Win Percentage
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat3" value="total-points-scored" onClick={this.handleStatSelection}>
            Point Scored
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat4" value="total-points-allowed" onClick={this.handleStatSelection}>
            Points Allowed
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat5" value="high-score" onClick={this.handleStatSelection}>
            High Score
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat6" value="low-score" onClick={this.handleStatSelection}>
            Low Score
          </Button>
          <Button bsStyle="primary" className="button-child" disabled name="statButton" id="stat7" value="what-if-wins" onClick={this.handleStatSelection}>
            'What If' Record
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat8" value="earnings" onClick={this.handleStatSelection}>
            Earnings
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat9" value="average-points-scored" onClick={this.handleStatSelection}>
            Average Points Scored
          </Button>
          <Button bsStyle="primary" className="button-child" name="statButton" id="stat10" value="average-points-allowed" onClick={this.handleStatSelection}>
            Average Points Against
          </Button>
        </div>
      </div>
      <div className="well data-selection-container">
        <h1>Users</h1>

        <div className="button-container">
          <Button bsStyle="success" className="button-child" name="userButton" id="user0" value="Ryan Coxe" onClick={this.handleUserSelection}>
            GM Coxe
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user1" value="Kevin Dobkin" onClick={this.handleUserSelection}>
            GM Dobkin
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user2" value="Jason Knaak" onClick={this.handleUserSelection}>
            GM Knaak
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user3" value="JD Langefeld" onClick={this.handleUserSelection}>
            GM Langefeld
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user4" value="Reece Langerock" onClick={this.handleUserSelection}>
            GM Langerock
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user5" value="Jimmy Ouska" onClick={this.handleUserSelection}>
            GM Ouska
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user6" value="Sean Quill" onClick={this.handleUserSelection}>
            GM Quill
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user7" value="Matt Rescke" onClick={this.handleUserSelection}>
            GM Reschke
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user8" value="Bryan Steger" onClick={this.handleUserSelection}>
            GM Steger
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user9" value="Mike Unverricht" onClick={this.handleUserSelection}>
            GM Unverricht
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user10" value="Trey Ward" onClick={this.handleUserSelection}>
            GM Ward
          </Button>
          <Button bsStyle="success" className="button-child" name="userButton" id="user11" value="Alex Warner" onClick={this.handleUserSelection}>
            GM Warner
          </Button>
        </div>
        <hr />
        <Button bsStyle="primary" className="button-child" name="userButton" id="user11" value="Dave Longwell" onClick={this.handleUserSelection}>
          GM Longwell
        </Button>
      </div>
    </div>
  </Panel>
</PanelGroup>;
