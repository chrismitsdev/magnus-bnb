import {
  Body,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Link,
  Row,
  Section,
  Tailwind,
  Text
} from 'react-email'

export default function EmailFormInternal() {
  return (
    <Html>
      <Tailwind>
        <Body className='m-0 bg-[#000000] text-[#ffffff]'>
          <Container className='max-w-xl'>
            <Section className='px-4 pt-8 pb-6'>
              <Row>
                <Heading
                  className='my-0'
                  as='h3'
                >
                  Νέα υποβολή φόρμας
                </Heading>
              </Row>
            </Section>

            <Hr className='my-0 border-t-[#fac938]!' />

            <Section className='px-4 pt-6 pb-8'>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Ονοματεπώνυμο:
                  </Heading>
                  <Text className='my-0!'>Chris Mitsiaris</Text>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Email:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`mailto:chrismits88@gmail.com`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    chrismits88@gmail.com
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Τηλέφωνο:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`tel:+306973993703`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    +306973993703
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Μήνυμα:
                  </Heading>
                  <Text className='my-0!'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

EmailFormInternal.displayName = 'EmailFormInternal'
