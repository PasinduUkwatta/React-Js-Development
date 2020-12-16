import axios from 'axios'


export const ErrorDetails = userError => {

        return axios
            .post('front-end-logs', {
                error: userError.error,
                errorInfo: userError.errorInfo,

            })
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                    console.log(error)
                }
            )

}