import {
  Row,
  Col,
  Container,
  Image,
  Form,
  FloatingLabel,
  NavbarBrand,
  Nav,
} from 'react-bootstrap';
import './custom-colors.scss';
import './landing.scss';
import { useTranslation } from 'react-i18next';
import TwitterDarkMobile from './assets/Twitter_dark_theme_mobile.svg';
import TwitterLightMobile from './assets/Twitter_light_theme_mobile.svg';
import TelegramDarkMobile from './assets/Telegram_dark_theme_mobile.svg';
import TelegramLightMobile from './assets/Telegram_light_theme_mobile.svg';
import VKDarkMobile from './assets/VK_dark_theme_mobile.svg';
import VKLightMobile from './assets/VK_light_theme_mobile.svg';
import YouTubeDarkMobile from './assets/YouTube_dark_theme_mobile.svg';
import YouTubeLightMobile from './assets/YouTube_light_theme_mobile.svg';
import TwitterDark from './assets/Twitter_dark_theme.svg';
import TwitterLight from './assets/Twitter_light_theme.svg';
import TelegramDark from './assets/Telegram_dark_theme.svg';
import TelegramLight from './assets/Telegram_light_theme.svg';
import VKDark from './assets/VK_dark_theme.svg';
import VKLight from './assets/VK_light_theme.svg';
import YouTubeDark from './assets/YouTube_dark_theme.svg';
import YouTubeLight from './assets/YouTube_light_theme.svg';
import RunItLogoLight from './assets/LogoFooterLight.svg';
import RunItLogoDark from './assets/LogoFooterDark.svg';

function Footer() {
  const { t } = useTranslation();

  const theme = document.documentElement.getAttribute('data-bs-theme');

  const logo = theme === 'light' ? RunItLogoLight : RunItLogoDark;

  return (
    <footer className="footer">
      <Container className="mt-5 py-5 text-white">
        <Row className="pt-4 d-lg-none">
          <Col className="col-6 mb-4">
            <NavbarBrand>
              <Image className="pb-2" fluid src={logo} />
            </NavbarBrand>
          </Col>
          <Col className="col-6 d-flex gap-2 mb-4">
            <Nav
              as="ul"
              className="d-flex flex-fill justify-content-between px-3 social-networks"
            >
              <li>
                <NavbarBrand
                  aria-label="Vk"
                  className="px-0"
                  href="https://vk.com/hexlet"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image fluid src={theme ? VKLightMobile : VKDarkMobile} />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="Telegram"
                  className="px-0"
                  href="https://t.me/hexletcommunity/12"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image
                    fluid
                    src={theme ? TelegramLightMobile : TelegramDarkMobile}
                  />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="Youtube"
                  className="px-0"
                  href="https://www.youtube.com/user/HexletUniversity"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image
                    fluid
                    src={theme ? YouTubeLightMobile : YouTubeDarkMobile}
                  />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="X"
                  className="px-0"
                  href="https://x.com/HexletHQ"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image
                    fluid
                    src={theme ? TwitterLightMobile : TwitterDarkMobile}
                  />
                </NavbarBrand>
              </li>
            </Nav>
          </Col>
          <Col className="col-6 mb-4">
            <Nav as="ul" className="list-group">
              <li className="mb-2">
                <NavbarBrand href="#aboutProject">
                  {t('landing.header.advantages')}
                </NavbarBrand>
              </li>
              <li className="mb-2 link-light">
                <NavbarBrand href="#advantages">Преимущества</NavbarBrand>
              </li>
              <li className="mb-2">
                <NavbarBrand href="#possibilities">
                  {t('landing.header.opportunities')}
                </NavbarBrand>
              </li>
              <li className="mb-2">
                <NavbarBrand href="#faq">{t('faq.faq')}</NavbarBrand>
              </li>
            </Nav>
          </Col>
          <Col className="col-6 mb-4">
            <Nav as="ul" className="list-group">
              <li className="mb-2">
                <NavbarBrand
                  href="https://ru.hexlet.io/pages/about"
                  target="_blank"
                >
                  {t('footer.about')}
                </NavbarBrand>
              </li>
              <li className="mb-2">
                <NavbarBrand
                  href="https://hexlet-ru.notion.site/c6406ed8890747e690d32b050faf42c2"
                  target="_blank"
                >
                  {t('footer.career')}
                </NavbarBrand>
              </li>
              <li className="mb-2">
                <NavbarBrand
                  href="https://hexlet.printdirect.ru/?partner_id=615497"
                  target="_blank"
                >
                  {t('footer.shop')}
                </NavbarBrand>
              </li>
              <li className="mb-2">
                <NavbarBrand href="mailto: runit@hexlet.io" target="_blank">
                  {t('footer.mailSupport')}
                </NavbarBrand>
              </li>
            </Nav>
          </Col>
          <Col className="col-6 mb-4">
            <p className="m-0">
              <NavbarBrand href={t('footer.tel1Href')}>
                <b>{t('footer.tel1')}</b>
              </NavbarBrand>
            </p>
            <p>{t('footer.rf')}</p>
          </Col>
          <Col className="col-6 mb-4">
            <p className="m-0">
              <NavbarBrand href={t('footer.tel2Href')}>
                <b>{t('footer.tel2')}</b>
              </NavbarBrand>
            </p>
            <p> {t('footer.moscow')}</p>
          </Col>
          <Col className="col-6  mb-4">
            <p className="m-0">{t('footer.name')}</p>
            <p className="m-0">{t('footer.ogrn')}</p>
          </Col>
          <Col className="col-6 mb-4">
            <p className="m-0">{t('footer.city')}</p>
            <p className="m-0">{t('footer.street')}</p>
          </Col>
        </Row>
        <Row className="d-flex mx-5 mb-3 align-items-center d-none d-lg-flex">
          <Col>
            <Image className="pb-3" fluid src={logo} />
          </Col>
          <Col>
            <Row>
              <Col className="align-self-center">
                <p className="mb-0">
                  <NavbarBrand href={t('footer.tel1Href')}>
                    <b>{t('footer.tel1')}</b>
                  </NavbarBrand>
                </p>
                <p className="m-0">{t('footer.rf')}</p>
              </Col>
              <Col>
                <p className="m-0">
                  <NavbarBrand href={t('footer.tel2Href')}>
                    <b>{t('footer.tel2')}</b>
                  </NavbarBrand>
                </p>
                <p className="m-0">{t('footer.moscow')}</p>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex gap-4 flex-nowrap">
            <Nav
              as="ul"
              className="justify-content-between w-75 social-networks flex-nowrap"
            >
              <li>
                <NavbarBrand
                  aria-label="Vk"
                  href="https://vk.com/hexlet"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image fluid src={theme ? VKLight : VKDark} />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="Telegram"
                  href="https://t.me/hexletcommunity/12"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image fluid src={theme ? TelegramLight : TelegramDark} />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="Youtube"
                  href="https://www.youtube.com/user/HexletUniversity"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image fluid src={theme ? YouTubeLight : YouTubeDark} />
                </NavbarBrand>
              </li>
              <li>
                <NavbarBrand
                  aria-label="X"
                  href="https://x.com/HexletHQ"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <Image fluid src={theme ? TwitterLight : TwitterDark} />
                </NavbarBrand>
              </li>
            </Nav>
          </Col>
        </Row>
        <Row className="d-flex mx-5 mb-5 align-items-center d-none d-lg-flex">
          <Col>
            <Row>
              <Col>
                <Nav as="ul" className="list-group">
                  <li className="mb-2">
                    <NavbarBrand className="p-0" href="#aboutProject">
                      {t('landing.header.advantages')}
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand className="p-0" href="#advantages">
                      Преимущества
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand className="p-0" href="#possibilities">
                      {t('landing.header.opportunities')}
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand className="p-0" href="#faq">
                      {t('faq.faq')}
                    </NavbarBrand>
                  </li>
                </Nav>
              </Col>
              <Col>
                <Nav as="ul" className="list-group">
                  <li className="mb-2">
                    <NavbarBrand
                      className="p-0"
                      href="https://ru.hexlet.io/pages/about"
                      target="_blank"
                    >
                      {t('footer.about')}
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand
                      className="p-0"
                      href="https://hexlet-ru.notion.site/c6406ed8890747e690d32b050faf42c2"
                      target="_blank"
                    >
                      {t('footer.career')}
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand
                      className="p-0"
                      href="https://hexlet.printdirect.ru/?partner_id=615497"
                      target="_blank"
                    >
                      {t('footer.shop')}
                    </NavbarBrand>
                  </li>
                  <li className="mb-2">
                    <NavbarBrand
                      className="p-0"
                      href="mailto: runit@hexlet.io"
                      target="_blank"
                    >
                      {t('footer.mailSupport')}
                    </NavbarBrand>
                  </li>
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col>
            <Form.Group data-bs-theme="light">
              <FloatingLabel
                className="text-black"
                controlId="floatingTextarea"
                label={t('footer.mailSupport')}
              >
                <Form.Control
                  as="textarea"
                  placeholder={t('footer.mailSupport')}
                  style={{ height: '8rem' }}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <div className="ms-auto">
              <p>{t('footer.name')}</p>
              <p className="m-0">{t('footer.city')}</p>
              <p>{t('footer.street')}</p>
              <p className="m-0">{t('footer.ogrn')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
