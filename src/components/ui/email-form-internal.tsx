import {
  Html,
  Tailwind,
  Body,
  Container,
  Hr,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link
} from '@react-email/components'
import {ContactFormActionState} from '@/src/lib/actions'

function EmailFormInternal(data: Readonly<ContactFormActionState['data']>) {
  return (
    <Html>
      <Tailwind>
        <Body className='m-0 bg-[#000000] text-[#ffffff]'>
          <Container className='max-w-[576px]'>
            <Section className='px-4 pt-8 pb-6'>
              <Row>
                <Heading
                  className='my-0'
                  as='h4'
                >
                  Νέα υποβολή φόρμας
                </Heading>
              </Row>
            </Section>

            <Hr className='my-0 !border-t-[#fac938]' />

            <Section className='px-4 pt-6 pb-8'>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Ονοματεπώνυμο:
                  </Heading>
                  <Text className='!my-0'>{data.fullName}</Text>
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
                    href={`mailto:${data.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {data.email}
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
                    href={`tel:${data.phone}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {data.phone}
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
                  <Text className='!my-0'>
                    {data.message || 'Ο επισκέπτης δεν άφησε κάποιο μήνυμα.'}
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

export {EmailFormInternal}
