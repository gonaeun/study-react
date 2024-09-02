import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CommentForm = () => {
  return (
    <Form>
        <Row className='g-2'> 
            <Col lg='8'> {/* lg는 large사이즈 데스크탑기준 */}
                <Form.Control type='text' placeholder='댓글 내용 작성'/>
            </Col>
            <Col>
                <Form.Control type='text' placeholder='작성자 이름'/>
            </Col>
        </Row>
        <Row className='my-2'>
            {/* 버튼 사이에 너비를 주고 싶을 때. 마진은 mx 또는 my */}
            <Col lg='12'>
                <Button className='w-100' variant='dart'>등록</Button>
                {/* w-숫자 : 너비값을 %로 지정 (0,25,50,78,100) / w는 width */}
            </Col>
        </Row>
    </Form>
  )
}

export default CommentForm