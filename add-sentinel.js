// Sentinel-2 katmanı eklemek için georaster-layer-for-leaflet kullanacağız
// CDN: https://unpkg.com/georaster-layer-for-leaflet

async function addSentinel2Layer(map) {
    try {
        // Sentinel-2 metadata
        const metadata = {
            "id": "S2B_35TPF_20240925_0_L2A",
            "date": "2024-09-25",
            "cloud": 0.59,
            "visual_url": "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/35/T/PF/2024/9/S2B_35TPF_20240925_0_L2A/TCI.tif"
        };
        
        // COG layer ekle (Cloud Optimized GeoTIFF)
        const response = await fetch(metadata.visual_url);
        const arrayBuffer = await response.arrayBuffer();
        
        // GeoRaster parse et
        const georaster = await parseGeoraster(arrayBuffer);
        
        // Layer oluştur
        const layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.8,
            resolution: 256
        });
        
        layer.addTo(map);
        
        console.log('✅ Sentinel-2 katmanı eklendi!');
        return layer;
    } catch (error) {
        console.error('❌ Sentinel-2 yükleme hatası:', error);
        return null;
    }
}
