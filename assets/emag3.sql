/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50623
Source Host           : 127.0.0.1:12306
Source Database       : emag3

Target Server Type    : MYSQL
Target Server Version : 50623
File Encoding         : 65001

Date: 2017-09-29 15:58:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `g_group`
-- ----------------------------
DROP TABLE IF EXISTS `g_group`;
CREATE TABLE `g_group` (
  `id` varchar(32) NOT NULL,
  `group_name` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of g_group
-- ----------------------------

-- ----------------------------
-- Table structure for `g_group_balance`
-- ----------------------------
DROP TABLE IF EXISTS `g_group_balance`;
CREATE TABLE `g_group_balance` (
  `create_time` varchar(16) NOT NULL DEFAULT '0',
  `group_id` varchar(32) NOT NULL DEFAULT '',
  `group_user_id` varchar(32) DEFAULT '',
  `user_id` varchar(32) NOT NULL DEFAULT '',
  `user_seat` int(2) DEFAULT '0',
  `user_fund` int(11) DEFAULT NULL,
  `user_score` int(11) DEFAULT NULL,
  `banker_seat` int(2) DEFAULT NULL,
  PRIMARY KEY (`create_time`,`user_id`,`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of g_group_balance
-- ----------------------------

-- ----------------------------
-- Table structure for `s_cfg`
-- ----------------------------
DROP TABLE IF EXISTS `s_cfg`;
CREATE TABLE `s_cfg` (
  `type_` varchar(32) NOT NULL DEFAULT '',
  `key_` varchar(64) NOT NULL DEFAULT '',
  `value_` varchar(32) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  PRIMARY KEY (`key_`,`type_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_cfg
-- ----------------------------
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'fund_max', '999999', '组类型：pushCake：基金（最大）', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'fund_min', '999', '组类型：pushCake：基金（最小）', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'player_count', '4', '组类型：pushCake：玩家数', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'round_count_max', '41', '组类型：pushCake：圈数（最大）', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'round_count_min', '11', '组类型：pushCake：圈数（最小）', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'visitor_count_max', '6', '组类型：pushCake：游客数（最大）', null, null, '1');
INSERT INTO `s_cfg` VALUES ('group_type_pushCake', 'visitor_count_min', '0', '组类型：pushCake：游客数（最小）', null, null, '1');

-- ----------------------------
-- Table structure for `s_manager`
-- ----------------------------
DROP TABLE IF EXISTS `s_manager`;
CREATE TABLE `s_manager` (
  `id` varchar(32) NOT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `user_pass` varchar(32) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `sex` int(2) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `mobile` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_manager
-- ----------------------------
INSERT INTO `s_manager` VALUES ('1', 'admin', 'c4ca4238a0b923820dcc509a6f75849b', '1', null, '2017-07-25 11:40:57', null, null);
INSERT INTO `s_manager` VALUES ('9c012a33aa8b4ecc8aaf20ea149a6f25', 'tuibing', '5c2c20df5204eb6c74ce3c686b7f0fc1', '1', null, '2017-07-25 11:41:00', null, null);

-- ----------------------------
-- Table structure for `s_user`
-- ----------------------------
DROP TABLE IF EXISTS `s_user`;
CREATE TABLE `s_user` (
  `id` varchar(32) NOT NULL,
  `p_id` varchar(32) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `user_pass` varchar(32) DEFAULT NULL,
  `server_id` varchar(32) DEFAULT NULL,
  `channel_id` varchar(128) DEFAULT NULL,
  `backend_id` varchar(32) DEFAULT NULL,
  `group_id` varchar(6) DEFAULT NULL COMMENT '群组id',
  `group_entry_time` varchar(32) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `status_time` datetime DEFAULT NULL,
  `nickname` varchar(32) DEFAULT NULL,
  `sex` int(2) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `mobile` varchar(32) DEFAULT NULL,
  `qq` varchar(32) DEFAULT NULL,
  `openid` varchar(128) DEFAULT NULL,
  `weixin_avatar` varchar(1024) DEFAULT NULL COMMENT '头像',
  `weixin_original` text,
  `email` varchar(128) DEFAULT NULL,
  `current_score` int(11) DEFAULT NULL COMMENT '现有积分',
  `tool_1` int(11) DEFAULT NULL,
  `tool_2` int(11) DEFAULT NULL,
  `tool_3` int(11) DEFAULT NULL,
  `tool_4` int(11) DEFAULT NULL,
  `tool_5` int(11) DEFAULT NULL,
  `tool_6` int(11) DEFAULT NULL,
  `tool_7` int(11) DEFAULT NULL,
  `tool_8` int(11) DEFAULT NULL,
  `tool_9` int(11) DEFAULT NULL,
  `vip` int(2) DEFAULT NULL,
  `consume_count` int(11) DEFAULT NULL COMMENT '消费（¥）',
  `win_count` int(11) DEFAULT NULL COMMENT '胜利（次数）',
  `lose_count` int(11) DEFAULT NULL COMMENT '失败（次数）',
  `win_score_count` int(11) DEFAULT NULL COMMENT '胜利（总分）',
  `lose_score_count` int(11) DEFAULT NULL COMMENT '失败（总分）',
  `line_gone_count` int(11) DEFAULT NULL COMMENT '掉线（次数）',
  `gold_count` int(11) DEFAULT NULL COMMENT '元宝',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_user
-- ----------------------------
INSERT INTO `s_user` VALUES ('0525822071ab11e7a481015d0a4c1d9e', null, '吴老肥', '96e79218965eb72c92a549dd5a330112', null, null, null, '', null, '1', null, '吴老肥', '1', '2017-07-26 10:35:00', '', '', '', null, null, '', '20066', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('2', null, 'wupeng  ', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '', null, '1', null, '李四', null, null, null, null, null, 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505119468585&di=8d3106f641a831639f8f1f925cbd1b6d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Ddef685c2db00baa1ae214ff82f79d367%2Fcc11728b4710b9128937bed0c9fdfc039245222d.jpg', null, null, '998832792', '31231', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('2c730630708011e78e22ffc0f87ffa5a', null, '猫1', '96e79218965eb72c92a549dd5a330112', null, null, null, '', null, '1', null, '', '1', '2017-07-24 22:55:46', '', '', '', null, null, '', '30000', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('3', null, 'lixiang', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '', null, '1', null, '王五', null, null, null, null, null, null, null, null, '999989930', '123123', '0', '0', '0', '0', '0', '0', '0', '0', '1', null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('5', null, 't11', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-0000020e-1cf14eb907f7be42-b6fc8a86', '1', '', '1506352924142', '1', null, 't1', null, null, null, null, null, null, null, null, '19394', '123', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '101');
INSERT INTO `s_user` VALUES ('6', null, 't2', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-00000205-9ca3208a2a89ae45-55fa7f06', '1', '967609', '1506343377625', '1', '2017-08-24 19:42:39', 't2', null, null, null, null, null, null, null, null, '41600', '89', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '106');
INSERT INTO `s_user` VALUES ('7', null, 't3', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-00000206-3f21d9212a89bc12-1924022c', '1', '967609', '1506343395463', '1', null, 't3', null, null, null, null, null, null, null, null, '122862147', '87', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('9c012a33aa8b4ecc8aaf20ea149a6f25', null, 'wy', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-0000016e-746e56e04155d614-f351fdf2', '1', '', '1506082028548', '1', null, '哈哈', null, null, null, null, null, null, null, null, '901228843', '1233123', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('9fe2a410777c11e7bdc4fd3c0cd2bc87', null, 't4', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-00000207-df5464ae6a894e00-a0e84a3c', '1', '967609', '1506343402066', '1', null, '猫4123123', '1', '2017-08-02 20:18:00', '', '', '', null, null, '', '10065', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('AAAAAA', null, 'aaa', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-000001f4-62da4ba5eb1fb042-88ef3b98', '1', '', '1506331243547', '1', null, '张三', null, null, null, '1234', null, 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoDA8HqHL3ZNz3jcQhf6aAryIdZ1j8Bh75TPTpoScMpODMsBa3mVBbQGDFxoajZiaF2JV9p8JHQXBQ/0', null, null, '7015', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('b5780670775f11e7831c0d095411373b', null, '猫2', '96e79218965eb72c92a549dd5a330112', null, null, null, '', null, '1', null, '猫2', '1', '2017-08-02 16:51:01', '', '', '', null, null, '', '43280', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('F3SA3Q', 'I3KZQZ', '雪箭轩', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '', null, '1', null, '雪箭轩', '1', '2017-08-01 21:10:17', '', '', '', null, null, '', '9570499', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '1111');
INSERT INTO `s_user` VALUES ('FGDSD3', 'I3KZQZ', '猫3', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '', null, '1', null, '猫34', '1', '2017-08-02 16:59:32', '', '', '', null, null, '', '1800023', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, '111');
INSERT INTO `s_user` VALUES ('I3KZQZ', 'AAAAAA', 'mega', 'e10adc3949ba59abbe56e057f20f883e', 'bbe1c450365b4bbd839d02411167cdea', '00163efffe05f4bb-00004ded-0000020c-315f470b4d6c0faa-66a4edd2', '1', '', '1506327597632', '1', null, '马六', null, '2017-08-08 10:18:43', null, '12341', null, null, null, null, '0', '123123', '0', '0', '0', '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, '2211');

-- ----------------------------
-- Table structure for `s_user_payment`
-- ----------------------------
DROP TABLE IF EXISTS `s_user_payment`;
CREATE TABLE `s_user_payment` (
  `id` varchar(32) NOT NULL,
  `user_id` varchar(32) DEFAULT NULL,
  `goods_id` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `order_id` varchar(64) DEFAULT NULL,
  `original_data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_user_payment
-- ----------------------------
INSERT INTO `s_user_payment` VALUES ('1bc8e9407a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '4', '2017-08-06 15:37:33', 'PB15552017080611424675675', null);
INSERT INTO `s_user_payment` VALUES ('1d18c1d07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '3', '2017-08-06 15:37:35', 'PB15552017080611424675675', null);
INSERT INTO `s_user_payment` VALUES ('9fd3f8707a7911e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '3', '2017-08-06 15:34:05', 'PB15552017080611424675675', null);

-- ----------------------------
-- Table structure for `s_user_transfer`
-- ----------------------------
DROP TABLE IF EXISTS `s_user_transfer`;
CREATE TABLE `s_user_transfer` (
  `id` varchar(32) NOT NULL,
  `source_id` varchar(32) DEFAULT NULL,
  `target_id` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `gold_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_user_transfer
-- ----------------------------

-- ----------------------------
-- Table structure for `w_game_prop`
-- ----------------------------
DROP TABLE IF EXISTS `w_game_prop`;
CREATE TABLE `w_game_prop` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `prop_name` varchar(32) DEFAULT NULL,
  `prop_desc` varchar(4000) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_game_prop
-- ----------------------------
INSERT INTO `w_game_prop` VALUES ('1', '冰冻', null, '2017-07-11 17:49:43');
INSERT INTO `w_game_prop` VALUES ('2', '锁定', null, '2017-06-06 10:29:31');
INSERT INTO `w_game_prop` VALUES ('3', '金币', '以个为单位', '2017-08-07 20:28:35');
INSERT INTO `w_game_prop` VALUES ('4', '元宝', null, '2017-09-09 13:46:48');

-- ----------------------------
-- Table structure for `w_gift`
-- ----------------------------
DROP TABLE IF EXISTS `w_gift`;
CREATE TABLE `w_gift` (
  `id` varchar(32) NOT NULL,
  `user_id` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `receive_time` datetime DEFAULT NULL COMMENT '领取时间',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品id',
  `gift_type` int(11) DEFAULT NULL,
  `game_prop_id` varchar(32) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `user_vip` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_gift
-- ----------------------------
INSERT INTO `w_gift` VALUES ('5ff876807a8411e7bed62189316c9a34', '9c012a33aa8b4ecc8aaf20ea149a6f25', '2017-08-06 16:51:02', null, '3', '1', '2', '1', '2');
INSERT INTO `w_gift` VALUES ('60b526e07a7011e7a2ac09d69666beda', '9c012a33aa8b4ecc8aaf20ea149a6f25', '2017-08-06 14:27:54', null, '2', '1', '3', '2123123', '2');

-- ----------------------------
-- Table structure for `w_gift_type`
-- ----------------------------
DROP TABLE IF EXISTS `w_gift_type`;
CREATE TABLE `w_gift_type` (
  `id` varchar(32) NOT NULL,
  `type_name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_gift_type
-- ----------------------------
INSERT INTO `w_gift_type` VALUES ('1', '每日登陆');
INSERT INTO `w_gift_type` VALUES ('2', '退出');

-- ----------------------------
-- Table structure for `w_goods`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods`;
CREATE TABLE `w_goods` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `goods_name` varchar(32) DEFAULT NULL,
  `goods_desc` varchar(4000) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `cost` int(11) DEFAULT NULL COMMENT '人民币',
  `payment_id` varchar(128) DEFAULT NULL COMMENT '支付平台的商品id',
  `disposable` int(1) DEFAULT NULL COMMENT '一次性的',
  `interval_time` int(2) DEFAULT NULL COMMENT '购买的间隔时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_goods
-- ----------------------------
INSERT INTO `w_goods` VALUES ('0618ba207bcf11e784627dd159406629', '商品7', '商品7', '2017-08-08 08:17:55', '7', '7', '1', '7');
INSERT INTO `w_goods` VALUES ('1', '商品3', '商品3', '2017-07-11 17:49:43', '3', '3', '1', '3');
INSERT INTO `w_goods` VALUES ('170f87f07bcf11e784627dd159406629', '商品8', '商品8', '2017-08-08 08:18:23', '8', '8', '1', '8');
INSERT INTO `w_goods` VALUES ('2', '商品1', '商品1', '2017-06-06 10:29:31', '1', '1', '1', '1');
INSERT INTO `w_goods` VALUES ('3', '100', '商品2', '2017-07-11 17:47:41', '100', '2', '0', '1');
INSERT INTO `w_goods` VALUES ('4', '1,000', '商品4', '2017-08-01 21:39:34', '500', 'sdfafasdf', '0', '4');
INSERT INTO `w_goods` VALUES ('5020b6507bce11e784627dd159406629', '商品5', '商品5', '2017-08-08 08:12:50', '5', '5', '1', '5');
INSERT INTO `w_goods` VALUES ('587a29d07bce11e784627dd159406629', '商品6', '商品6', '2017-08-08 08:13:04', '6', '6', '1', '6');
INSERT INTO `w_goods` VALUES ('6f738960994711e7b3315d878c407a53', '12', '1', '2017-09-14 20:22:55', '0', '1', '0', '0');
INSERT INTO `w_goods` VALUES ('baa2bff07bd811e78b655f61f9095a9f', '登陆奖励', '登陆奖励', '2017-08-08 09:27:23', '10', '33', '0', '34');

-- ----------------------------
-- Table structure for `w_goods_detail`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods_detail`;
CREATE TABLE `w_goods_detail` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `goods_id` varchar(32) DEFAULT NULL,
  `game_prop_id` varchar(32) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_goods_detail
-- ----------------------------
INSERT INTO `w_goods_detail` VALUES ('1', '1', '1', '1', '2017-08-07 17:16:58');
INSERT INTO `w_goods_detail` VALUES ('10', '0618ba207bcf11e784627dd159406629', '3', '77', '2017-08-08 08:18:07');
INSERT INTO `w_goods_detail` VALUES ('11', '170f87f07bcf11e784627dd159406629', '3', '88', '2017-08-08 08:18:45');
INSERT INTO `w_goods_detail` VALUES ('12', 'baa2bff07bd811e78b655f61f9095a9f', '3', '10000', '2017-08-08 09:27:55');
INSERT INTO `w_goods_detail` VALUES ('13', 'baa2bff07bd811e78b655f61f9095a9f', '2', '3', '2017-08-08 09:28:18');
INSERT INTO `w_goods_detail` VALUES ('2', '1', '2', '2', '2017-08-07 17:17:01');
INSERT INTO `w_goods_detail` VALUES ('3', '2', '1', '3', '2017-08-07 17:17:03');
INSERT INTO `w_goods_detail` VALUES ('4', '4', '4', '1000', '2017-08-07 17:17:06');
INSERT INTO `w_goods_detail` VALUES ('5', '1', '3', '5', '2017-08-07 20:30:30');
INSERT INTO `w_goods_detail` VALUES ('6', '3', '4', '100', '2017-08-08 08:15:57');
INSERT INTO `w_goods_detail` VALUES ('7', '3', '3', '5', '2017-08-08 08:16:34');
INSERT INTO `w_goods_detail` VALUES ('8', '5020b6507bce11e784627dd159406629', '3', '55', '2017-08-08 08:17:13');
INSERT INTO `w_goods_detail` VALUES ('9', '587a29d07bce11e784627dd159406629', '3', '66', '2017-08-08 08:17:31');

-- ----------------------------
-- Table structure for `w_notice`
-- ----------------------------
DROP TABLE IF EXISTS `w_notice`;
CREATE TABLE `w_notice` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `title` varchar(32) DEFAULT NULL,
  `content` varchar(4000) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `user_id` varchar(32) DEFAULT NULL,
  `last_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_notice
-- ----------------------------
INSERT INTO `w_notice` VALUES ('484f7e607cba11e7bd9e93d29c1332a2', '力量1', '了<font color=\"#9fe1e7\">反反复复2</font>', '2017-08-09 12:21:58', '1', null);
INSERT INTO `w_notice` VALUES ('bullet_level_consume', '10', '子弹消耗倍数', '2017-07-11 17:49:43', '1', '2017-07-27 20:03:45');
INSERT INTO `w_notice` VALUES ('bullet_level_max', '100', '子弹最大等级', '2017-06-06 10:29:31', '1', null);
INSERT INTO `w_notice` VALUES ('bullet_level_min', '1', '子弹最小等级', '2017-07-11 17:47:41', '1', null);
INSERT INTO `w_notice` VALUES ('da426e6076be11e7ad1a29fa785dd421', '111', '杨光在游戏<b><font color=\"#fbe983\">中已充值99</font></b>99<strike><font color=\"#f83a22\">999</font></strike>', '2017-08-01 21:39:34', '1', null);

-- ----------------------------
-- Table structure for `w_order`
-- ----------------------------
DROP TABLE IF EXISTS `w_order`;
CREATE TABLE `w_order` (
  `id` varchar(32) NOT NULL,
  `user_id` varchar(32) DEFAULT NULL,
  `goods_id` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `order_id` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0未领取 1领取',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_order
-- ----------------------------
INSERT INTO `w_order` VALUES ('03f24fa07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:36:53', 'PB15552017080611424675675', '1');
INSERT INTO `w_order` VALUES ('0c3b96807a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:07', 'PB15552017080611424675675', '1');
INSERT INTO `w_order` VALUES ('151843c07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:22', 'PB15552017080611424675675', '1');
INSERT INTO `w_order` VALUES ('1b163b107a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:32', 'PB15552017080611424675675', '1');
INSERT INTO `w_order` VALUES ('1bc8e9407a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:33', 'PB15552017080611424675675', '1');
INSERT INTO `w_order` VALUES ('1d18c1d07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:35', 'PB15552017080611424675675', '0');
INSERT INTO `w_order` VALUES ('1e6258d07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:37', 'PB15552017080611424675675', '0');
INSERT INTO `w_order` VALUES ('1efc00c07a7a11e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:37:38', 'PB15552017080611424675675', '0');
INSERT INTO `w_order` VALUES ('9fd3f8707a7911e7ae301facf754df8a', '9c012a33aa8b4ecc8aaf20ea149a6f25', '1', '2017-08-06 15:34:05', 'PB15552017080611424675675', '1');
