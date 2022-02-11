import sensors from 'sa-sdk-javascript'
sensors.init({
    server_url: 'http://sademo.datasink.sensorsdata.cn/sa?token=3c559e14653ef272&project=VideoWebcastDemo',
    heatmap: { clickmap: 'default', scroll_notice_map: 'default' },
    is_track_single_page: true,
    use_client_time: true,
    send_type: 'beacon',
    show_log: true
});
// 设置公共属性
sensors.registerPage({
    platform: "H5",
    app_name: '沐甜商城网站',
})
sensors.quick('autoTrack')
const sensorHelper = sensors
export default sensorHelper



