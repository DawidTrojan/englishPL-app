{
  fixtures.fixtures.map(match => (
    <li key={match.id}>
      <span>{match.homeTeam.name} </span>
      <span>{match.score.fullTime.homeTeam} : </span>
      <span>{match.score.fullTime.awayTeam} </span>
      <span>{match.awayTeam.name} </span>
      <span>{match.utcDate}</span>
    </li>
  ));
}
