class BaseApi

  def self.successful_call?(response)
    response['meta']['code'] == 200 ? true : false
  end
end