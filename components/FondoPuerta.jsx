

const FondoPuerta = ({
  children,
  height,
  width,
  img,
  isOpenTarjeta,
  tarjetaFijada,
  isTarjetaGrande
}) => {
  return (
    <>
      <style jsx>{`
        .carddiv {
          height: ${height + "px"};
          width: ${width + "px"};
          /* max-width: 80vw; */
          background-image: url("${img}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          justify-content: center;
          border-radius: ${isOpenTarjeta || tarjetaFijada ? "10px 0 0 10px" : "5px"};
          border: solid 2px rgba(0, 0, 0, 0.8);
        }

        .carddiv:hover {
        }
      `}</style>
  
        <div className="carddiv">{children}</div>

    </>
  );
};

export default FondoPuerta;
