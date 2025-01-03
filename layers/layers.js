ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5254").setExtent([409981.928151, 4544053.384386, 428430.897482, 4556747.077415]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_DistrictBoundry_1 = new ol.format.GeoJSON();
var features_DistrictBoundry_1 = format_DistrictBoundry_1.readFeatures(json_DistrictBoundry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_DistrictBoundry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundry_1.addFeatures(features_DistrictBoundry_1);
var lyr_DistrictBoundry_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundry_1, 
                style: style_DistrictBoundry_1,
                popuplayertitle: 'District Boundry',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundry_1.png" /> District Boundry'
            });
var format_DistrictRoad_2 = new ol.format.GeoJSON();
var features_DistrictRoad_2 = format_DistrictRoad_2.readFeatures(json_DistrictRoad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_DistrictRoad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictRoad_2.addFeatures(features_DistrictRoad_2);
var lyr_DistrictRoad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictRoad_2, 
                style: style_DistrictRoad_2,
                popuplayertitle: 'District Road',
                interactive: true,
                title: '<img src="styles/legend/DistrictRoad_2.png" /> District Road'
            });
var format_EducationBuildingsSultanbeyli_3 = new ol.format.GeoJSON();
var features_EducationBuildingsSultanbeyli_3 = format_EducationBuildingsSultanbeyli_3.readFeatures(json_EducationBuildingsSultanbeyli_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_EducationBuildingsSultanbeyli_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationBuildingsSultanbeyli_3.addFeatures(features_EducationBuildingsSultanbeyli_3);
var lyr_EducationBuildingsSultanbeyli_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationBuildingsSultanbeyli_3, 
                style: style_EducationBuildingsSultanbeyli_3,
                popuplayertitle: 'Education Buildings Sultanbeyli',
                interactive: true,
                title: '<img src="styles/legend/EducationBuildingsSultanbeyli_3.png" /> Education Buildings Sultanbeyli'
            });
var format_GreenAreasSultanbeyli_4 = new ol.format.GeoJSON();
var features_GreenAreasSultanbeyli_4 = format_GreenAreasSultanbeyli_4.readFeatures(json_GreenAreasSultanbeyli_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_GreenAreasSultanbeyli_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreasSultanbeyli_4.addFeatures(features_GreenAreasSultanbeyli_4);
var lyr_GreenAreasSultanbeyli_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreasSultanbeyli_4, 
                style: style_GreenAreasSultanbeyli_4,
                popuplayertitle: 'Green Areas Sultanbeyli',
                interactive: true,
                title: '<img src="styles/legend/GreenAreasSultanbeyli_4.png" /> Green Areas Sultanbeyli'
            });
var format_HealthFacilitiesPointsSultanbeyli_5 = new ol.format.GeoJSON();
var features_HealthFacilitiesPointsSultanbeyli_5 = format_HealthFacilitiesPointsSultanbeyli_5.readFeatures(json_HealthFacilitiesPointsSultanbeyli_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_HealthFacilitiesPointsSultanbeyli_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilitiesPointsSultanbeyli_5.addFeatures(features_HealthFacilitiesPointsSultanbeyli_5);
var lyr_HealthFacilitiesPointsSultanbeyli_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilitiesPointsSultanbeyli_5, 
                style: style_HealthFacilitiesPointsSultanbeyli_5,
                popuplayertitle: 'Health Facilities Points Sultanbeyli',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilitiesPointsSultanbeyli_5.png" /> Health Facilities Points Sultanbeyli'
            });
var format_CulturalInstitutionsPointsSultanbeyli_6 = new ol.format.GeoJSON();
var features_CulturalInstitutionsPointsSultanbeyli_6 = format_CulturalInstitutionsPointsSultanbeyli_6.readFeatures(json_CulturalInstitutionsPointsSultanbeyli_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_CulturalInstitutionsPointsSultanbeyli_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturalInstitutionsPointsSultanbeyli_6.addFeatures(features_CulturalInstitutionsPointsSultanbeyli_6);
var lyr_CulturalInstitutionsPointsSultanbeyli_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturalInstitutionsPointsSultanbeyli_6, 
                style: style_CulturalInstitutionsPointsSultanbeyli_6,
                popuplayertitle: 'Cultural Institutions Points Sultanbeyli',
                interactive: true,
                title: '<img src="styles/legend/CulturalInstitutionsPointsSultanbeyli_6.png" /> Cultural Institutions Points Sultanbeyli'
            });
var format_EducationBuildingsSaryer_7 = new ol.format.GeoJSON();
var features_EducationBuildingsSaryer_7 = format_EducationBuildingsSaryer_7.readFeatures(json_EducationBuildingsSaryer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_EducationBuildingsSaryer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationBuildingsSaryer_7.addFeatures(features_EducationBuildingsSaryer_7);
var lyr_EducationBuildingsSaryer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationBuildingsSaryer_7, 
                style: style_EducationBuildingsSaryer_7,
                popuplayertitle: 'Education Buildings Sarıyer',
                interactive: true,
                title: '<img src="styles/legend/EducationBuildingsSaryer_7.png" /> Education Buildings Sarıyer'
            });
var format_GreenAreasSaryer_8 = new ol.format.GeoJSON();
var features_GreenAreasSaryer_8 = format_GreenAreasSaryer_8.readFeatures(json_GreenAreasSaryer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_GreenAreasSaryer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreasSaryer_8.addFeatures(features_GreenAreasSaryer_8);
var lyr_GreenAreasSaryer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreasSaryer_8, 
                style: style_GreenAreasSaryer_8,
                popuplayertitle: 'Green Areas Sarıyer',
                interactive: true,
                title: '<img src="styles/legend/GreenAreasSaryer_8.png" /> Green Areas Sarıyer'
            });
var format_HealthFacilitiesPointsSaryer_9 = new ol.format.GeoJSON();
var features_HealthFacilitiesPointsSaryer_9 = format_HealthFacilitiesPointsSaryer_9.readFeatures(json_HealthFacilitiesPointsSaryer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_HealthFacilitiesPointsSaryer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilitiesPointsSaryer_9.addFeatures(features_HealthFacilitiesPointsSaryer_9);
var lyr_HealthFacilitiesPointsSaryer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilitiesPointsSaryer_9, 
                style: style_HealthFacilitiesPointsSaryer_9,
                popuplayertitle: 'Health Facilities Points Sarıyer',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilitiesPointsSaryer_9.png" /> Health Facilities Points Sarıyer'
            });
var format_CulturalInstitutionsPointsSaryer_10 = new ol.format.GeoJSON();
var features_CulturalInstitutionsPointsSaryer_10 = format_CulturalInstitutionsPointsSaryer_10.readFeatures(json_CulturalInstitutionsPointsSaryer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_CulturalInstitutionsPointsSaryer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturalInstitutionsPointsSaryer_10.addFeatures(features_CulturalInstitutionsPointsSaryer_10);
var lyr_CulturalInstitutionsPointsSaryer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturalInstitutionsPointsSaryer_10, 
                style: style_CulturalInstitutionsPointsSaryer_10,
                popuplayertitle: 'Cultural Institutions Points Sarıyer',
                interactive: true,
                title: '<img src="styles/legend/CulturalInstitutionsPointsSaryer_10.png" /> Cultural Institutions Points Sarıyer'
            });
var format_EducationBuildingsKadky_11 = new ol.format.GeoJSON();
var features_EducationBuildingsKadky_11 = format_EducationBuildingsKadky_11.readFeatures(json_EducationBuildingsKadky_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_EducationBuildingsKadky_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationBuildingsKadky_11.addFeatures(features_EducationBuildingsKadky_11);
var lyr_EducationBuildingsKadky_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationBuildingsKadky_11, 
                style: style_EducationBuildingsKadky_11,
                popuplayertitle: 'Education Buildings Kadıköy',
                interactive: true,
                title: '<img src="styles/legend/EducationBuildingsKadky_11.png" /> Education Buildings Kadıköy'
            });
var format_GreenAreasKadky_12 = new ol.format.GeoJSON();
var features_GreenAreasKadky_12 = format_GreenAreasKadky_12.readFeatures(json_GreenAreasKadky_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_GreenAreasKadky_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreasKadky_12.addFeatures(features_GreenAreasKadky_12);
var lyr_GreenAreasKadky_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreasKadky_12, 
                style: style_GreenAreasKadky_12,
                popuplayertitle: 'Green Areas Kadıköy',
                interactive: true,
                title: '<img src="styles/legend/GreenAreasKadky_12.png" /> Green Areas Kadıköy'
            });
var format_HealthFacilitiesPointsKadky_13 = new ol.format.GeoJSON();
var features_HealthFacilitiesPointsKadky_13 = format_HealthFacilitiesPointsKadky_13.readFeatures(json_HealthFacilitiesPointsKadky_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_HealthFacilitiesPointsKadky_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilitiesPointsKadky_13.addFeatures(features_HealthFacilitiesPointsKadky_13);
var lyr_HealthFacilitiesPointsKadky_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilitiesPointsKadky_13, 
                style: style_HealthFacilitiesPointsKadky_13,
                popuplayertitle: 'Health Facilities Points Kadıköy',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilitiesPointsKadky_13.png" /> Health Facilities Points Kadıköy'
            });
var format_CulturalInstitutionsPointsKadky_14 = new ol.format.GeoJSON();
var features_CulturalInstitutionsPointsKadky_14 = format_CulturalInstitutionsPointsKadky_14.readFeatures(json_CulturalInstitutionsPointsKadky_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_CulturalInstitutionsPointsKadky_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturalInstitutionsPointsKadky_14.addFeatures(features_CulturalInstitutionsPointsKadky_14);
var lyr_CulturalInstitutionsPointsKadky_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturalInstitutionsPointsKadky_14, 
                style: style_CulturalInstitutionsPointsKadky_14,
                popuplayertitle: 'Cultural Institutions Points Kadıköy',
                interactive: true,
                title: '<img src="styles/legend/CulturalInstitutionsPointsKadky_14.png" /> Cultural Institutions Points Kadıköy'
            });
var format_EducationBuildingsAvclar_15 = new ol.format.GeoJSON();
var features_EducationBuildingsAvclar_15 = format_EducationBuildingsAvclar_15.readFeatures(json_EducationBuildingsAvclar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_EducationBuildingsAvclar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationBuildingsAvclar_15.addFeatures(features_EducationBuildingsAvclar_15);
var lyr_EducationBuildingsAvclar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationBuildingsAvclar_15, 
                style: style_EducationBuildingsAvclar_15,
                popuplayertitle: 'Education Buildings Avcılar',
                interactive: true,
                title: '<img src="styles/legend/EducationBuildingsAvclar_15.png" /> Education Buildings Avcılar'
            });
var format_GreenAreasAvclar_16 = new ol.format.GeoJSON();
var features_GreenAreasAvclar_16 = format_GreenAreasAvclar_16.readFeatures(json_GreenAreasAvclar_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_GreenAreasAvclar_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreasAvclar_16.addFeatures(features_GreenAreasAvclar_16);
var lyr_GreenAreasAvclar_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreasAvclar_16, 
                style: style_GreenAreasAvclar_16,
                popuplayertitle: 'Green Areas Avcılar',
                interactive: true,
                title: '<img src="styles/legend/GreenAreasAvclar_16.png" /> Green Areas Avcılar'
            });
var format_HealthFacilitiesPointsAvclar_17 = new ol.format.GeoJSON();
var features_HealthFacilitiesPointsAvclar_17 = format_HealthFacilitiesPointsAvclar_17.readFeatures(json_HealthFacilitiesPointsAvclar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_HealthFacilitiesPointsAvclar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilitiesPointsAvclar_17.addFeatures(features_HealthFacilitiesPointsAvclar_17);
var lyr_HealthFacilitiesPointsAvclar_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilitiesPointsAvclar_17, 
                style: style_HealthFacilitiesPointsAvclar_17,
                popuplayertitle: 'Health Facilities Points Avcılar',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilitiesPointsAvclar_17.png" /> Health Facilities Points Avcılar'
            });
var format_CulturalInstitutionsPointsAvclar_18 = new ol.format.GeoJSON();
var features_CulturalInstitutionsPointsAvclar_18 = format_CulturalInstitutionsPointsAvclar_18.readFeatures(json_CulturalInstitutionsPointsAvclar_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5254'});
var jsonSource_CulturalInstitutionsPointsAvclar_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturalInstitutionsPointsAvclar_18.addFeatures(features_CulturalInstitutionsPointsAvclar_18);
var lyr_CulturalInstitutionsPointsAvclar_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturalInstitutionsPointsAvclar_18, 
                style: style_CulturalInstitutionsPointsAvclar_18,
                popuplayertitle: 'Cultural Institutions Points Avcılar',
                interactive: true,
                title: '<img src="styles/legend/CulturalInstitutionsPointsAvclar_18.png" /> Cultural Institutions Points Avcılar'
            });
var group_Avclar = new ol.layer.Group({
                                layers: [lyr_EducationBuildingsAvclar_15,lyr_GreenAreasAvclar_16,lyr_HealthFacilitiesPointsAvclar_17,lyr_CulturalInstitutionsPointsAvclar_18,],
                                fold: "open",
                                title: 'Avcılar'});
var group_Kadky = new ol.layer.Group({
                                layers: [lyr_EducationBuildingsKadky_11,lyr_GreenAreasKadky_12,lyr_HealthFacilitiesPointsKadky_13,lyr_CulturalInstitutionsPointsKadky_14,],
                                fold: "open",
                                title: 'Kadıköy'});
var group_Saryer = new ol.layer.Group({
                                layers: [lyr_EducationBuildingsSaryer_7,lyr_GreenAreasSaryer_8,lyr_HealthFacilitiesPointsSaryer_9,lyr_CulturalInstitutionsPointsSaryer_10,],
                                fold: "open",
                                title: 'Sarıyer'});
var group_Sultanbeyli = new ol.layer.Group({
                                layers: [lyr_EducationBuildingsSultanbeyli_3,lyr_GreenAreasSultanbeyli_4,lyr_HealthFacilitiesPointsSultanbeyli_5,lyr_CulturalInstitutionsPointsSultanbeyli_6,],
                                fold: "open",
                                title: 'Sultanbeyli'});

lyr_OpenStreetMap_0.setVisible(true);lyr_DistrictBoundry_1.setVisible(true);lyr_DistrictRoad_2.setVisible(true);lyr_EducationBuildingsSultanbeyli_3.setVisible(true);lyr_GreenAreasSultanbeyli_4.setVisible(true);lyr_HealthFacilitiesPointsSultanbeyli_5.setVisible(true);lyr_CulturalInstitutionsPointsSultanbeyli_6.setVisible(true);lyr_EducationBuildingsSaryer_7.setVisible(true);lyr_GreenAreasSaryer_8.setVisible(true);lyr_HealthFacilitiesPointsSaryer_9.setVisible(true);lyr_CulturalInstitutionsPointsSaryer_10.setVisible(true);lyr_EducationBuildingsKadky_11.setVisible(true);lyr_GreenAreasKadky_12.setVisible(true);lyr_HealthFacilitiesPointsKadky_13.setVisible(true);lyr_CulturalInstitutionsPointsKadky_14.setVisible(true);lyr_EducationBuildingsAvclar_15.setVisible(true);lyr_GreenAreasAvclar_16.setVisible(true);lyr_HealthFacilitiesPointsAvclar_17.setVisible(true);lyr_CulturalInstitutionsPointsAvclar_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DistrictBoundry_1,lyr_DistrictRoad_2,group_Sultanbeyli,group_Saryer,group_Kadky,group_Avclar];
lyr_DistrictBoundry_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'adm2_tr': 'adm2_tr', 'adm2_en': 'adm2_en', 'adm1_tr': 'adm1_tr', 'adm1_en': 'adm1_en', 'adm1': 'adm1', 'pcode': 'pcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictRoad_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_EducationBuildingsSultanbeyli_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_GreenAreasSultanbeyli_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_HealthFacilitiesPointsSultanbeyli_5.set('fieldAliases', {'Sağlık Tesisi Adı': 'Sağlık Tesisi Adı', 'Ana Kategori': 'Ana Kategori', 'Alt Kategori': 'Alt Kategori', 'İlçe Adı': 'İlçe Adı', 'Mahalle Adı': 'Mahalle Adı', 'ADRES': 'ADRES', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CulturalInstitutionsPointsSultanbeyli_6.set('fieldAliases', {'Kütüphan': 'Kütüphan', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_EducationBuildingsSaryer_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_GreenAreasSaryer_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_HealthFacilitiesPointsSaryer_9.set('fieldAliases', {'Sağlık Tesisi Adı': 'Sağlık Tesisi Adı', 'Ana Kategori': 'Ana Kategori', 'Alt Kategori': 'Alt Kategori', 'İlçe Adı': 'İlçe Adı', 'Mahalle Adı': 'Mahalle Adı', 'ADRES': 'ADRES', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CulturalInstitutionsPointsSaryer_10.set('fieldAliases', {'Yer': 'Yer', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', });
lyr_EducationBuildingsKadky_11.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_GreenAreasKadky_12.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_HealthFacilitiesPointsKadky_13.set('fieldAliases', {'Sağlık T': 'Sağlık T', 'Ana Katego': 'Ana Katego', 'Alt Katego': 'Alt Katego', 'İlçe Ad�': 'İlçe Ad�', 'Mahalle Ad': 'Mahalle Ad', 'ADRES': 'ADRES', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CulturalInstitutionsPointsKadky_14.set('fieldAliases', {'Kültürel ve Sosyal Yapı Adı': 'Kültürel ve Sosyal Yapı Adı', 'İlçe Adı': 'İlçe Adı', 'LATITIDE': 'LATITIDE', 'LONGITUDE': 'LONGITUDE', });
lyr_EducationBuildingsAvclar_15.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_GreenAreasAvclar_16.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_HealthFacilitiesPointsAvclar_17.set('fieldAliases', {'Sağlık T': 'Sağlık T', 'Ana Katego': 'Ana Katego', 'Alt Katego': 'Alt Katego', 'İlçe Ad�': 'İlçe Ad�', 'Mahalle Ad': 'Mahalle Ad', 'ADRES': 'ADRES', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CulturalInstitutionsPointsAvclar_18.set('fieldAliases', {'Yer': 'Yer', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', });
lyr_DistrictBoundry_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'adm2_tr': 'TextEdit', 'adm2_en': 'TextEdit', 'adm1_tr': 'TextEdit', 'adm1_en': 'TextEdit', 'adm1': 'TextEdit', 'pcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictRoad_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_EducationBuildingsSultanbeyli_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_GreenAreasSultanbeyli_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_HealthFacilitiesPointsSultanbeyli_5.set('fieldImages', {'Sağlık Tesisi Adı': 'TextEdit', 'Ana Kategori': 'TextEdit', 'Alt Kategori': 'TextEdit', 'İlçe Adı': 'TextEdit', 'Mahalle Adı': 'TextEdit', 'ADRES': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CulturalInstitutionsPointsSultanbeyli_6.set('fieldImages', {'Kütüphan': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_EducationBuildingsSaryer_7.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_GreenAreasSaryer_8.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_HealthFacilitiesPointsSaryer_9.set('fieldImages', {'Sağlık Tesisi Adı': 'TextEdit', 'Ana Kategori': 'TextEdit', 'Alt Kategori': 'TextEdit', 'İlçe Adı': 'TextEdit', 'Mahalle Adı': 'TextEdit', 'ADRES': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CulturalInstitutionsPointsSaryer_10.set('fieldImages', {'Yer': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', });
lyr_EducationBuildingsKadky_11.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_GreenAreasKadky_12.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_HealthFacilitiesPointsKadky_13.set('fieldImages', {'Sağlık T': 'TextEdit', 'Ana Katego': 'TextEdit', 'Alt Katego': 'TextEdit', 'İlçe Ad�': 'TextEdit', 'Mahalle Ad': 'TextEdit', 'ADRES': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CulturalInstitutionsPointsKadky_14.set('fieldImages', {'Kültürel ve Sosyal Yapı Adı': 'TextEdit', 'İlçe Adı': 'TextEdit', 'LATITIDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_EducationBuildingsAvclar_15.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_GreenAreasAvclar_16.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_HealthFacilitiesPointsAvclar_17.set('fieldImages', {'Sağlık T': 'TextEdit', 'Ana Katego': 'TextEdit', 'Alt Katego': 'TextEdit', 'İlçe Ad�': 'TextEdit', 'Mahalle Ad': 'TextEdit', 'ADRES': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CulturalInstitutionsPointsAvclar_18.set('fieldImages', {'Yer': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', });
lyr_DistrictBoundry_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'adm2_tr': 'no label', 'adm2_en': 'no label', 'adm1_tr': 'no label', 'adm1_en': 'no label', 'adm1': 'no label', 'pcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictRoad_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_EducationBuildingsSultanbeyli_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_GreenAreasSultanbeyli_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_HealthFacilitiesPointsSultanbeyli_5.set('fieldLabels', {'Sağlık Tesisi Adı': 'no label', 'Ana Kategori': 'no label', 'Alt Kategori': 'no label', 'İlçe Adı': 'no label', 'Mahalle Adı': 'no label', 'ADRES': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CulturalInstitutionsPointsSultanbeyli_6.set('fieldLabels', {'Kütüphan': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_EducationBuildingsSaryer_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_GreenAreasSaryer_8.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_HealthFacilitiesPointsSaryer_9.set('fieldLabels', {'Sağlık Tesisi Adı': 'no label', 'Ana Kategori': 'no label', 'Alt Kategori': 'no label', 'İlçe Adı': 'no label', 'Mahalle Adı': 'no label', 'ADRES': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CulturalInstitutionsPointsSaryer_10.set('fieldLabels', {'Yer': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', });
lyr_EducationBuildingsKadky_11.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_GreenAreasKadky_12.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_HealthFacilitiesPointsKadky_13.set('fieldLabels', {'Sağlık T': 'no label', 'Ana Katego': 'no label', 'Alt Katego': 'no label', 'İlçe Ad�': 'no label', 'Mahalle Ad': 'no label', 'ADRES': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CulturalInstitutionsPointsKadky_14.set('fieldLabels', {'Kültürel ve Sosyal Yapı Adı': 'no label', 'İlçe Adı': 'no label', 'LATITIDE': 'no label', 'LONGITUDE': 'no label', });
lyr_EducationBuildingsAvclar_15.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_GreenAreasAvclar_16.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_HealthFacilitiesPointsAvclar_17.set('fieldLabels', {'Sağlık T': 'no label', 'Ana Katego': 'no label', 'Alt Katego': 'no label', 'İlçe Ad�': 'no label', 'Mahalle Ad': 'no label', 'ADRES': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CulturalInstitutionsPointsAvclar_18.set('fieldLabels', {'Yer': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', });
lyr_CulturalInstitutionsPointsAvclar_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});