import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import useKakaoLoader from './useKakaoLoader';
import api from '../api';

const MapComponent = () => {
    useKakaoLoader();

    const [position, setPosition] = useState(null);

    // 현재 위치(위경도) 확인
    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("현재 위치:", position);
        });
    };

    // 서버로부터 위치정보 요청
    const getGwangjuPlace = async () => {
        let res = await api.get('/place/position');
        console.log(res.data);
        setPosition(res.data.position);
    };

    useEffect(() => {
        getCurrentPosition();
        getGwangjuPlace();
    }, []);

    return (
        <div>
            <Map
                id="map"
                center={{
                    lat: 35.14656855941232,
                    lng: 126.92220584707904,
                }}
                style={{
                    width: "100%",
                    height: "350px",
                }}
                level={3}
            >
                {position?.map((pos) => (
                    <EventMarkerContainer
                        key={`EventMarkerContainer-${pos.latlng.lat}-${pos.latlng.lng}`}
                        position={pos.latlng}
                        title={pos.title}
                    />
                ))}
            </Map>
        </div>
    );
};

// 개별 마커 상태를 관리하는 컴포넌트
const EventMarkerContainer = ({ position, title }) => {
    const [isVisible, setIsVisible] = useState(false);
    const map = useMap();

    return (
        <MapMarker
            position={position}
            clickable={true}
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
        >
            {isVisible && (
                <div style={{ padding: "5px", color: "#000" }}>
                    {title}
                </div>
            )}
        </MapMarker>
    );
};

export default MapComponent;
