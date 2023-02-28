import Modal from "react-bootstrap/Modal"
import { WiHumidity } from "react-icons/wi"
import { FaTemperatureLow } from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
import Loaders from "./Loaders"

const ModalInfo = (props) => {
  const {
    showModal,
    city,
    condition,
    temp,
    icon,
    feelsLike,
    humidity,
    handleClose,
    descError,
    error,
    loading,
  } = props

  return (
    <Modal
      show={showModal}
      onClick={() => handleClose()}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "rgb(59, 174, 246)" }}>
          Weather App
        </Modal.Title>
      </Modal.Header>

      {error ? (
        <>
          {" "}
          <Modal.Body>
            <div
              className="weather-info d-flex flex-column justify-content-center align-items-center "
              style={{ height: "150px" }}
            >
              <AiFillCloseCircle style={{ fontSize: "75px", color: "rgb(245, 88, 88)" }} />
              <h3 className="mt-4"> {descError} </h3>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center p-0">
            <div className="m-0 d-flex justify-content-center align-items-center">
              <div className="footer-modal border-end">
                <div className="d-flex align-items-center">
                  <FaTemperatureLow className="temp-icon mx-2" />
                  <div className="flex-column">
                    <div className="celc"></div>
                    <div className="caption-celc"></div>
                  </div>
                </div>
              </div>
              <div className="footer-modal">
                <div className="d-flex align-items-center">
                  <WiHumidity className="humidity-icon mx-2" />
                  <div className="flex-column">
                    <div className="celc"></div>
                    <div className="caption-celc"></div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Body>
            {loading ? (
              <>
                <Loaders />{" "}
              </>
            ) : (
              <div className="weather-info d-flex flex-column justify-content-center align-items-center ">
                <div>
                  <div>{icon}</div>
                </div>
                <div className="temp">{temp}</div>
                <h6>{condition}</h6>
                <h6>{city}</h6>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="justify-content-center p-0">
            <div className="m-0 d-flex justify-content-center align-items-center">
              <div className="footer-modal border-end">
                <div className="d-flex align-items-center">
                  <FaTemperatureLow className="temp-icon mx-2" />
                  <div className="flex-column">
                    <div className="celc">{feelsLike}</div>
                    <div className="caption-celc">feels like</div>
                  </div>
                </div>
              </div>
              <div className="footer-modal">
                <div className="d-flex align-items-center">
                  <WiHumidity className="humidity-icon mx-2" />
                  <div className="flex-column">
                    <div className="celc">{humidity}</div>
                    <div className="caption-celc">Humidity</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ModalInfo
