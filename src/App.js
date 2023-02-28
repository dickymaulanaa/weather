import { Button, Form, Stack } from "react-bootstrap"
import "./App.css"
import { useState } from "react"
import ModalInfo from "./component/modalINfo"
import axios from "axios"

const App = () => {
  const [datas, setDatas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [location, setLocation] = useState("")
  const [error, setError] = useState(false)
  const [descError, setDescError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setError(false)

    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d1f0cecf5ae37d616261d47f08df91c1`,
    })
      .then((result) => setDatas(result.data))
      .catch((error) => {
        if (error.response) {
          setDescError(error.response.data.message)
          setError(true)
        }
      })
      .finally(() => setLoading(false))
  }
  const handleChangeForm = (e) => {
    const data = e.target.value
    setLocation(data)
  }

  const handleClose = () => {
    setDatas([null])
    setShowModal(false)
  }

  return (
    <div className="box border d-flex align-items-center justify-content-center ">
      <div className="input-box rounded-3">
        <div>
          <h4 className="border-bottom px-2 py-2 title">Weather App</h4>
          <div className="px-4 mt-5">
            <Stack direction="vertical" gap={3}>
              <Form.Control type="text" placeholder="Enter City Name" onChange={handleChangeForm} />
              <Button
                onClick={() => {
                  setShowModal(true)
                  handleSubmit()
                }}
              >
                Submit
              </Button>
            </Stack>

            <ModalInfo
              loading={loading}
              error={error}
              descError={descError}
              handleClose={handleClose}
              showModal={showModal}
              closeModal={() => setShowModal(false)}
              city={datas.name}
              temp={datas.main ? <>{Math.floor(datas.main.temp - 275.15)}&deg;C</> : null}
              icon={
                datas.weather ? (
                  <img
                    src={`http://openweathermap.org/img/w/${datas.weather[0].icon}.png`}
                    alt="a"
                    className="icon-celc"
                  />
                ) : null
              }
              condition={datas.weather ? <>{datas.weather[0].main}</> : null}
              feelsLike={datas.main ? <>{Math.floor(datas.main.feels_like - 275.15)}&deg;C</> : null}
              humidity={datas.main ? <>{datas.main.humidity + "%"}</> : null}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
// https://www.mapquestapi.com/geocoding/v1/reverse?key=NLWAXxAp2o3c4glj1hj3ljlHqg65TQ7C&location=-6.9206016%2C107.6232192&outFormat=json&thumbMaps=false
