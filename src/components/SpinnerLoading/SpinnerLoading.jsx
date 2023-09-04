import { TailSpin } from "react-loader-spinner";
import '../SpinnerLoading/spinnerLoading.css'

const SpinnerLoading = () => {
  return (
    <div className="spinner-container">
          <TailSpin
            height="100"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h2>Loading...</h2>
        </div>
  )
}

export default SpinnerLoading