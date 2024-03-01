import ymaps from 'ymaps';

ymaps
    .load()
    .then(
        (maps: any) => {
        const map:any = new maps.Map('container-map', (
            {
                center: [-8.369326, 115.166023],
                zoom: 7
            }
            ));
        }
    )
    .catch((error: any) => console.log('Failed to load Yandex Maps', error));