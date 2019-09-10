export const getData = {
  data() {
    return {
      leftList: [
        {
          isTextImg: true,
          router: '/textImg',
          imgUrl: '@/../static/images/1.jpg',
          header: '第一章:阿里巴巴与网易交易细节披露',
          title: '0'
        },
        {
          isTextImg: true,
          router: '/textImg',
          imgUrl: '@/../static/images/2.jpg',
          header: '第二章:网易和阿里巴巴',
          title: '1'
        },
        {
          isText: true,
          router: '/text',
          text: '阿里巴巴与网易交易细节披露：17亿美元现金+1430万股票收购考拉，4.68亿美元领投网易云音乐',
          title: '2'
        },
        {
          isText: true,
          router: '/text',
          text: '美东时间9月5日盘后，网易和阿里巴巴同时宣布阿里巴巴以20亿美元全资收购网易旗下跨境电商平台考拉。根据 SEC 文件，20亿美元中包含约17亿现金，以及1430万股阿里巴巴股票（价值约3亿）。这17亿美元现金中的一部分，将用于偿还网易给考拉的借款以及期权兑现。',
          title: '3'
        },
        {
          isTextImg: true,
          router: '/textImg',
          imgUrl: '@/../static/images/bg.jpeg',
          article: {
            p: ['美东时间9月5日盘后，网易和阿里巴巴同时宣布阿里巴巴以20亿美元全','根据 SEC 文件，20亿美'],
            span: ['textImg']
          },
          title: '4'
        },
        {
          isVideo: true,
          router: '/video',
          videoImg: '@/../static/images/video1.png',
          videoText: '我太难啦啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿',
          videoUrl: '@/../static/video/1.mp4',
          title: '5'
        },
      ]
    }
  }
};
