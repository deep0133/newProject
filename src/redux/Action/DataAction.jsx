import axios from 'axios'
import {
  Requesting,
  Requesting_Failure,
  Requesting_Success,
} from '../Reducer/DataReducer'
import { masterData } from '../../utils/data'
export const Subjects = () => async (dispatch) => {
  dispatch(Requesting())

  try {
    // const url = 'http://localhost:5000/'
    // const response = await axios.get(url)
    const response = { data: masterData }
    console.log('response : ', response)

    dispatch(Requesting_Success(response))
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message || 'An error occurred'

    dispatch(Requesting_Failure(errorMessage))
    console.log('error:', errorMessage)
  }
}
