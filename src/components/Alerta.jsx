
export const Alerta = ({ msg, error }) => {
    return (
      <div className={`${error ? 'bg-danger' : 'bg-gradient-success text-center'}`}>
        <div className="card-body text-white">
          {msg}
            <br />
        </div>
      </div>
    );
  };
