package com.niit.org.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.niit.org.bean.Account;
import com.niit.org.bean.LiveRoom;
import com.niit.org.bean.RespondBody;
import com.niit.org.bean.User;
import com.niit.org.dto.LiveRoomDTO;
import com.niit.org.dto.SubscribeDTO;
import com.niit.org.mapper.ILiveRoomService;
import com.niit.org.service.CollectionService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.awt.geom.Ellipse2D;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class LiveController {

	@Resource
	private CollectionService collectionService;

	@Resource
	private ILiveRoomService ilrs;

	@RequestMapping(value = "/liveroom/{id}", method = RequestMethod.GET)
	public String index(@PathVariable("id") Integer roomId, HttpServletRequest request, ModelMap modelMap,HttpSession session) {

		
		LiveRoomDTO room = ilrs.queryRoomById(roomId).get(0);
		modelMap.addAttribute("room", room);
		return "liveroom";
	}
	
	@RequestMapping(value = "/getRoomInfo", method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> getRoomInfo(@RequestParam("roomId") Integer roomId) {
		LiveRoomDTO room = ilrs.queryRoomById(roomId).get(0);
		Map<String, Object> map = new HashMap<>();
		if (room == null) {
			map.put("code", 0);
		} else {
			map.put("code", 1);
			map.put("room_info", room);
		}
		return map;
	}
	
	@RequestMapping(value = "/isOnline", method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> isOnline(@RequestParam("roomId") Integer roomId) {
		LiveRoomDTO room = ilrs.queryRoomById(roomId).get(0);
		Map<String, Object> map = new HashMap<>();
		if (room.getStatus() == 0) {
			map.put("isPlay", 0);
		} else {
			map.put("isPlay", 1);
		}
		return map;
	}

	@RequestMapping(value = "/collecting", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	@ResponseBody
	public RespondBody subscribe(@RequestBody SubscribeDTO subscribeDTO) {
		RespondBody respondBody = new RespondBody();

		if (subscribeDTO.getIsCollect() == null) {
			String status = collectionService.queryStatus(subscribeDTO);
			Map data =new HashMap<>();
			data.put("RoomId", subscribeDTO.getRoomId());
			data.put("UserId", subscribeDTO.getUserId());
			data.put("subscribeStatus", status);
			respondBody.setStatus("1");
			respondBody.setData(data);
			return respondBody;
		} else if (subscribeDTO.getIsCollect().equals("0")) {
			int result = collectionService.deleteCollection(subscribeDTO);
			if(result==0) {
			respondBody.setStatus("0");
			respondBody.setError("未订阅该直播间，取消订阅操作失败");
			return respondBody;
			}else {
			String status = collectionService.queryStatus(subscribeDTO);
			Map data =new HashMap<>();
			data.put("RoomId", subscribeDTO.getRoomId());
			data.put("UserId", subscribeDTO.getUserId());
			data.put("subscribeStatus", status);
			respondBody.setStatus(String.valueOf(result));
			respondBody.setData(data);
			return respondBody;
			}
		} else if (subscribeDTO.getIsCollect().equals("1")) {
			if (Integer.valueOf(collectionService.queryStatus(subscribeDTO)) > 0) {
				respondBody.setStatus("0");			
				respondBody.setError("已订阅，参数错误");
				return respondBody;
			} else {
				int result = collectionService.insertCollection(subscribeDTO);
				String status = collectionService.queryStatus(subscribeDTO);
				Map data =new HashMap<>();
				data.put("RoomId", subscribeDTO.getRoomId());
				data.put("UserId", subscribeDTO.getUserId());
				data.put("subscribeStatus", status);
				respondBody.setStatus(String.valueOf(result));
				respondBody.setData(data);
				return respondBody;
			}

		} else {
			respondBody.setStatus("0");
			respondBody.setError("status 参数错误");
			return respondBody;
		}

	}
	
	@RequestMapping(value = "/mycollect/{id}")
	public String MyCollect(@PathVariable("id") Integer id, HttpServletRequest request, ModelMap modelMap,HttpSession session) {
		User user=(User) session.getAttribute("user");
		if(user.getId()!=id) {
			return "verError";
		}else {
			List<LiveRoomDTO> colletList=collectionService.getMyCollect(id);
			session.setAttribute("collectList", colletList);
			return "myCollectRoom";	
		}
		
	}

	
}
