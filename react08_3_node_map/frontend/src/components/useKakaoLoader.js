import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

const useKakaoLoader = () =>{

    const APP_KEY = process.env.REACT_APP_KAKAOMAP_APP_KEY;
    
        useKakaoLoaderOrigin({
          appkey: APP_KEY,
          libraries: ["clusterer", "drawing", "services"],
        })
}

export default useKakaoLoader