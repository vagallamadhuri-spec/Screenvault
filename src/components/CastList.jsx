import CastChip from "./CastChip";

function CastList(props) {
  const cast = props.cast || [];   

  return (
    <div>
      <p className="cast-label">Cast</p>
      <div className="chip-row">
        {cast.map((name, i) => (
          <CastChip key={i} name={name} />
        ))}
      </div>
    </div>
  );
}

export default CastList;