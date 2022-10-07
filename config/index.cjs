/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx36bb6752b4b31ff3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b6e494269ac7b9450ce0bcdc0a5ee4ee',

  PROVINCE: '重庆',
  CITY: '沙坪坝',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小蒋同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_iIg5j3krCXcs2nZHjW_0nDOb40',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'XtjH1vmTQj5aSpqosF3Kvfs3v1poSs1C61V-CZUh7OQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小蒋', year: '2001', date: '06-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '10-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
      say:'这是一句测试的话'
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'XtjH1vmTQj5aSpqosF3Kvfs3v1poSs1C61V-CZUh7OQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_iIg5j3krCXcs2nZHjW_0nDOb40',
    }
  ],

}

module.exports = USER_CONFIG

