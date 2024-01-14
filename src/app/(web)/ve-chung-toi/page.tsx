import Navbar from '@/common/components/navbar';
import Hero from './components/Hero';
import NumberShowcase from './components/NumberShowcase';
import OurTeam from './components/OurTeam';
import Footer from '@/common/components/footer';
import { Box, Stack, Typography } from '@mui/material';
import Container from '@/common/config/container';

const Page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <NumberShowcase />
      <Container my={5}>
        <Stack fontWeight={300}>
          <Typography sx={{ fontSize: '20px' }}>Công ty Cổ phần Truyền thông DT Travel tự hào:</Typography>
          <ul style={{ listStyle: 'inside', marginLeft: '20px' }}>
            <li>
              6 năm liền đứng trong TOP 10 công ty Du lịch hàng đầu Việt Nam do Tổng Cục du lịch Việt Nam trao tặng.
            </li>
            <li>
              Doanh nghiệp 8 năm liên tiếp trong TOP 10 Doanh nghiệp Du Lịch hàng đầu của TP. HCM do Sở Văn hóa Thông
              tin Du lịch và Ủy Ban Nhân Dân Thành Phố Hồ Chí Minh trao tặng.
            </li>
            <li>
              2 lần liên tiếp TOP 100 Doanh nghiệp Sao Vàng Đất Việt (2014 và 2018 ) - thương hiệu hàng đầu Việt Nam có
              khả năng cạnh tranh quốc tế do Trung ương Hội LHTN VN và Hội Doanh Nhân Trẻ Việt Nam trao tặng và rất
              nhiều thành tích nổi bật khác.
            </li>
            <li>
              Top 10 Doanh nghiệp Lữ hành Outbound hàng đầu Việt Nam năm 2019 do Bộ Văn hóa Thể Thao và Du lịch trao
              tặng.
            </li>
            <li>
              Top 3 Doanh nghiệp lữ hành outbound hàng đầu TP.HCM năm 2018 do Ủy Ban Nhân Dân Thành phố Hồ Chí Minh và
              Sở Du lịch Thành phố Hồ Chí Minh trao tặng.
            </li>
            <li>
              Top 5 Doanh nghiệp lữ hành nội địa hàng đầu TP.HCM năm 2018 do Ủy Ban Nhân Dân Thành phố Hồ Chí Minh và Sở
              Du Lịch Thành Phố Hồ Chí Minh trao tặng.
            </li>
            <li>
              Top 10 Giải thưởng du lịch Việt Nam năm 2018 (Outbound) do Hiệp Hội du lịch Việt Nam phối hợp với Tổng Cục
              du lịch Việt Nam trao tặng.
            </li>
            <li>
              Doanh nghiệp Du Lịch có thành tích xuất sắc đạt giải Top 10 Doanh nghiệp hàng đầu Thành phố 5 năm liên
              tục, góp phần tích cực trong phong trào thi đua của Thành phố do Ủy Ban Nhân Dân TP. Hồ Chí Minh trao
              tặng.
            </li>
            <li>
              Giải thưởng doanh nghiệp Lữ hành Vàng do đưa nhiều đoàn khách đến tham quan du lịch Nhật Bản – do Cục Xúc
              tiến Du lịch Nhật Bản tặng.
            </li>
            <li>
              Giải thưởng doanh nghiệp Lữ hành Vàng do đưa nhiều đoàn khách đến tham quan du lịch Hàn Quốc – do Tổng Cục
              du lịch Hàn Quốc tặng.
            </li>
            <li>
              Đạt danh hiệu top 200 thương hiệu tiêu biểu có khả năng cạnh tranh quốc tế nhận bằng chứng nhận Sao Vàng
              Đất Việt năm 2018 do UBTƯ Hội Doanh Nhân Trẻ Việt Nam trao tặng.
            </li>
            <li>Đơn vị Lữ hành đưa khách Du lịch đến Huế nhiều nhất do UBND Tỉnh Thừa Thiên Huế trao tặng. </li>
            <li>Top 4 Công ty Lữ hành có doanh số cao nhất do Hãng hàng không Royal Brunie tặng.</li>
          </ul>
        </Stack>
        <Box
          component={'img'}
          src="/images/cups.png"
          alt="cups"
          sx={{ objectFit: 'cover', my: 2 }}
          width={'100%'}
          height={'auto'}
        />
      </Container>
      <OurTeam />
      <Footer />
    </section>
  );
};

export default Page;
