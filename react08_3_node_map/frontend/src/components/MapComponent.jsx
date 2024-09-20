import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from './useKakaoLoader'
import api from '../api'

const MapComponent = () => {
    useKakaoLoader();

    // 인포윈도우 Open 여부를 저장하는 state 입니다.
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState(null)


    // 현재 위치(위경도) 확인
    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("현재 위치:", position);
        });
        // F12 - 콘솔창에서 객체로 확인 가능
    };

    // 서버로부터 위치정보 요청
    const getGwangjuPlace = async () => {
        let res = await api.get('/place/position')

        console.log(res.data);

        setPosition(res.data.position)
    }

    useEffect(() => {
        getCurrentPosition();
        getGwangjuPlace()
    }, []);

    return (
        <div>
            <Map // 지도를 표시할 Containersr
                id="map"
                center={{
                    // 지도의 중심좌표
                    // 인공지능사관학교
                    lat: 35.14656855941232,
                    lng: 126.92220584707904,
                    // 카카오 제주도 본사
                    // lat: 33.450701,
                    // lng: 126.570667,
                }}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "350px",
                }}
                level={3} // 지도의 확대 레벨
            >
               {position?.map((pos) => (
                    <MapMarker
                        position={pos.latlng}
                        clickable={true}
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                    >
                        {isOpen && (
                            <div style={{ padding: "5px", color: "#000" }}>
                                {pos.title}
                            </div>
                        )}
                    </MapMarker>
                ))}
            </Map>
        </div>
    )
}

export default MapComponent